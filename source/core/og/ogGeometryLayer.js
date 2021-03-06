/********************************************************************************
 #                          OpenWebGlobe Version 1.x                            #
 #                              (c) 2010-2015 by                                #
 #           University of Applied Sciences Northwestern Switzerland            #
 #                     Institute of Geomatics Engineering                       #
 #                           martin.christen@fhnw.ch                            #
 ********************************************************************************
 *     Licensed under MIT License. Read the file LICENSE for more information   *
 *******************************************************************************/


goog.provide('owg.ogGeometryLayer');
goog.require('owg.ObjectDefs');
goog.require('owg.ogObject');
goog.require('owg.ogScene');
goog.require('owg.ogGeometry');


//------------------------------------------------------------------------------
/**
 * @constructor
 * @description POI Layer class (OpenWebGlobe object)
 * @author Martin Christen, martin.christen@fhnw.ch
 * @author Benjamin Loesch, benjamin.loesch@fhnw.ch
 */
function ogGeometryLayer()
{
   /** @type {string} */
   this.name = "ogGeometryLayer";
   /** @type {number} */
   this.type = OG_OBJECT_GEOMETRYLAYER;
   /** @type {boolean} */
   this.hide = false;  // true if poi layer is hidden
   /** @type {Array.<ogGeometry>} */
   this.geometryarray = [];   // array of "ogGeometries"

   /** @type {boolean} */
   this.simple3d = false;   // true for non-streamed 3d objects

   
   /** @type {string} */
   this.layername = "";
}
//------------------------------------------------------------------------------
ogGeometryLayer.prototype = new ogObject();
//------------------------------------------------------------------------------


/**
 * @description Parse Options
 * @param {Object} options
 */
ogGeometryLayer.prototype.ParseOptions = function(options)
{
   if(options["name"])
   {
      this.layername = options["name"];
   }
   if( options["type"] == "static")
   {
      this.simple3d = true;
   }
   else
   {
      this.AddGeometryLayer(options);
   }
}

//------------------------------------------------------------------------------
/**
 * @description Called when object is destroyed. Never call manually.
 * @ignore
 */
ogGeometryLayer.prototype._OnDestroy = function()
{
   this.RemoveGeometryLayer();
}

//------------------------------------------------------------------------------
/**
 * @description hide the poi layer
 */
ogGeometryLayer.prototype.Hide = function()
{
   this.hide = true;
   for(var i= 0; i < this.geometryarray.length; i++)
   {
      this.geometryarray[i].Hide();
   }

}

//------------------------------------------------------------------------------
/**
 * @description show the previously hidden poi layer
 */
ogGeometryLayer.prototype.Show = function()
{
   this.hide = false;
   for(var i= 0; i < this.geometryarray.length; i++)
   {
      this.geometryarray[i].Show();
   }
}

//------------------------------------------------------------------------------
/**
 *  @description removes all geometries from the layer
 */
ogGeometryLayer.prototype.RemoveGeometryLayer = function()
{
   for(var i= 0; i < this.geometryarray.length; i++)
   {
      for(var j=i;j<this.geometryarray.length;j++){
         this.geometryarray[i].indexInRendererArray -= 1;
      }
      this.geometryarray[i].UnregisterObject();
   }
   
}

//------------------------------------------------------------------------------
/**
 *  @description adds a geometry to the layer
 */
ogGeometryLayer.prototype.AddGeometry = function(geometry)
{
   this.geometryarray.push(geometry);
   geometry.layerID = this.id;
}

//------------------------------------------------------------------------------
/**
 *  @description adds a geometry to the layer
 */
ogGeometryLayer.prototype.RemoveGeometry = function(geometry)
{
   for(var i= 0; i < this.geometryarray.length; i++)
   {
      if(this.geometryarray[i] == geometry)
      {
         for(var j=i+1;j<this.geometryarray.length;j++){
            this.geometryarray[j].indexInRendererArray -= 1;
         }
         this.geometryarray[i].UnregisterObject();
         this.geometryarray.splice(i,1);
      }
   }
}

//------------------------------------------------------------------------------
/**
 * @description Get the current globe renderer or null if there is none
 * @ignore
 * @returns {GlobeRenderer}
 */
ogGeometryLayer.prototype.GetGlobeRenderer = function()
{
   /** @type {GlobeRenderer} */
   var renderer = null;

   //parent of ogGeometryLayer is ogWorld
   /** @type {ogWorld} */
   var world = /** @type ogWorld */this.parent;

   // parent of world is scene

   var scene = /** @type ogScene */world.parent;

   // parent of scene is context
   /** @type {ogContext} */
   var context = /** @type ogContext */scene.parent;

   // Get the engine
   /** @type {engine3d} */
   var engine = context.engine;

   // test if there is a scenegraph attached
   if (engine.scene)
   {
      if (engine.scene.nodeRenderObject)
      {
         renderer = engine.scene.nodeRenderObject.globerenderer;
      }
   }
   return renderer;
}
//------------------------------------------------------------------------------
/**
 * @description Add a geometry layer to the world
 */
ogGeometryLayer.prototype.AddGeometryLayer = function(options)
{
   /** @type {GlobeRenderer} */
   var renderer = this.GetGlobeRenderer();
   if (renderer)
   {
      this.layerindex = renderer.AddGeometryLayer(options);
   }
}
//------------------------------------------------------------------------------
/**
 * @description Remove image layer
 */
ogGeometryLayer.prototype.RemoveGeometryLayer = function()
{
   if (this.simple3d)
   {
      return; // simple3d is not connected to globe renderer
   }

   /** @type {GlobeRenderer} */
   var renderer = this.GetGlobeRenderer();
   if (renderer && this.layerindex != -1)
   {
      renderer.RemoveGeometryLayer(this.layerindex);
   }
}

