/*******************************************************************************
#      ____               __          __  _      _____ _       _               #
#     / __ \              \ \        / / | |    / ____| |     | |              #
#    | |  | |_ __   ___ _ __ \  /\  / /__| |__ | |  __| | ___ | |__   ___      #
#    | |  | | '_ \ / _ \ '_ \ \/  \/ / _ \ '_ \| | |_ | |/ _ \| '_ \ / _ \     #
#    | |__| | |_) |  __/ | | \  /\  /  __/ |_) | |__| | | (_) | |_) |  __/     #
#     \____/| .__/ \___|_| |_|\/  \/ \___|_.__/ \_____|_|\___/|_.__/ \___|     #
#           | |                                                                #
#           |_|                 _____ _____  _  __                             #
#                              / ____|  __ \| |/ /                             #
#                             | (___ | |  | | ' /                              #
#                              \___ \| |  | |  <                               #
#                              ____) | |__| | . \                              #
#                             |_____/|_____/|_|\_\                             #
#                                                                              #
#                              (c) 2010-2011 by                                #
#           University of Applied Sciences Northwestern Switzerland            #
#                          martin.christen@fhnw.ch                             #
********************************************************************************

This file is part of the OpenWebGlobe SDK

GPL LICENSE

i3D OpenWebGlobe SDK is free software: you can redistribute it and/or modify  it
under the  terms of  the GNU  General Public  License as  published by  the Free
Software Foundation, either version  2 of the License,  or (at your option)  any
later version.

i3D OpenWebGlobe  SDK is  distributed in  the hope  that it  will be useful, but
WITHOUT ANY WARRANTY;  without even the  implied warranty of  MERCHANTABILITY or
FITNESS FOR A PARTICULAR PURPOSE.  See  the GNU General Public License for  more
details.

You should have received a copy of the GNU General Public License along with i3D
OpenWebGlobe SDK.  If not, see <http://www.gnu.org/licenses/>.

Commercial License

OEMs (Original  Equipment Manufacturers),  ISVs (Independent  Software Vendors),
VARs (Value Added Resellers) and other distributors that combine and  distribute
commercially licensed  software with  i3D OpenWebGlobe  SDK and  do not  wish to
distribute the source code for the commercially licensed software under  version
2 of the  GNU General Public  License (the "GPL")  must enter into  a commercial
license agreement with the Institute of Geomatics Engineering at the  University
of Applied Sciences Northwestern Switzerland (FHNW).
*******************************************************************************/
function Mesh(engine)
{
   this.engine = engine;
   this.gl = engine.gl;
   
   this.vbo = null;  // vertex buffer
   this.ibo = null;  // index buffer
   
   this.positiondata = null;  // position data
   this.normaldata = null;    // normals
   this.texcoorddata = null;  // texture coordinates
   this.mode = "";
   this.numvertex = 0;        // number of vertices
   this.numindex = 0;         // number of elements of index vector
   
   this.vertexbufferdata = null; // new 
   this.indexbufferdata = null;  // new Uint16Array(indices)
   this.indexsemantic = null;    // triangle, line etc.
   this.mvp = null;              // modelview projection matrix
   
   this.Ready = false;           //Ready to draw
   this.http = null; 
   this.jsonUrl = null;
   this.cbfJSONLoad = null;
}
//------------------------------------------------------------------------------

Mesh.prototype.Create = function(nvertex) 
{
   this.numvertex = nvertex;
}
//------------------------------------------------------------------------------

//------------------
// VERTEX SEMANTICS
//------------------

// P: Position
// N: Normal
// T: Texture
// C: Color

// Currently the following vertex semantics are supported:
//    P:    Position only
//    PNT:  Position, Normal, Texcoord
//    PC:   Position, Color
//    PT:   Position, Texcoord
//    PNCT: Position, Normal, Color, Texcoord


/*sm = new ShaderManager(gl);

myMesh = new Mesh(engine);
myMesh.SetBufferP([0,0,0,   1,0,0,   1,1,0,]);
myMesh.SetIndexBuffer("TRIANGLE", [0,1,2]);
myMesh.ToGPU();
*/


//------------------------------------------------------------------------------
Mesh.prototype.SetBufferP = function(p)
{
   if ((p.length / 3) == this.numvertex)
   {
      this.vertexbufferdata = new Float32Array(p);
      this.mode = "p";
   }
}
//------------------------------------------------------------------------------
Mesh.prototype.SetBufferPNT = function(pnt)
{
   if ((pnt.length / 8) == this.numvertex)
   {
      this.vertexbufferdata = new Float32Array(pnt);
      this.mode = "pnt";
   }
}
//------------------------------------------------------------------------------
Mesh.prototype.SetBufferPC = function(pc)
{
   if ((pc.length / 7) == this.numvertex)
   {
      this.vertexbufferdata = new Float32Array(pc);
      this.mode = "pc";
   }
}
//------------------------------------------------------------------------------
Mesh.prototype.SetBufferPT = function(pt)
{
   if ((pt.length / 5) == this.numvertex)
   {
      this.vertexbufferdata = new Float32Array(pt);
      this.mode = "pt";
   }
}
//------------------------------------------------------------------------------
Mesh.prototype.SetBufferPNCT = function(pnct)
{
   if ((pnct.length / 12) == this.numvertex)
   {
      this.vertexbufferdata = new Float32Array(pnct);
      this.mode = "pnct";
   }
}
//------------------------------------------------------------------------------
Mesh.prototype.SetIndexBuffer = function(idx,idxsem)
{
   this.indexbufferdata = Uint16Array(idx); 
   this.indexsemantic = idxsem;
   this.numindex = idx.length;
}

//------------------------------------------------------------------------------
Mesh.prototype.ToGPU = function()
{
   //test vertexbufferdata ungleich null
   // Create VB
    this.vbo = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertexbufferdata, this.gl.STATIC_DRAW);
    
    // Create IB
    this.ibo = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.ibo);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.indexbufferdata, this.gl.STATIC_DRAW);
}

//------------------------------------------------------------------------------
Mesh.prototype.SetModelViewProjection = function(mvp)
{
  this.mvp = mvp;
}

//------------------------------------------------------------------------------
Mesh.prototype.Draw = function()
{
   if (this.mvp == null)
   {
      alert("argh!!! ModelViewProjection not set!!");
      return;
   }
     this.gl.viewport(0, 0, engine.context.width, engine.context.height);
     this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );
     // setup interleaved VBO and IBO
     this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
     this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.ibo);
      
     switch (this.mode) 
     {
         case "p":      this.gl.enableVertexAttribArray(0);
                        this.gl.vertexAttribPointer(0, 3, this.gl.FLOAT, false, 8*4, 0*4); // position
                        break;
                         
         case "pnt": 
                        this.gl.enableVertexAttribArray(0);
                        this.gl.enableVertexAttribArray(1);
                        this.gl.enableVertexAttribArray(2);
                        this.gl.vertexAttribPointer(0, 3, this.gl.FLOAT, false, 8*4, 0*4); // position
                        this.gl.vertexAttribPointer(1, 3, this.gl.FLOAT, false, 8*4, 3*4); // normal
                        this.gl.vertexAttribPointer(2, 2, this.gl.FLOAT, false, 8*4, 6*4); // texcoord
                        engine.shadermanager.UseShader_PNT(this.mvp);
                        break;
                        
          case "pc": 
                        this.gl.enableVertexAttribArray(0);
                        this.gl.enableVertexAttribArray(1);
                        this.gl.vertexAttribPointer(0, 3, this.gl.FLOAT, false, 7*4, 0*4); // position
                        this.gl.vertexAttribPointer(1, 4, this.gl.FLOAT, false, 7*4, 3*4); // color
                        engine.shadermanager.UseShader_PC(this.mvp);
                        break;
                        
          case "pt": 
                        this.gl.enableVertexAttribArray(0);
                        this.gl.enableVertexAttribArray(1);
                        this.gl.vertexAttribPointer(0, 3, this.gl.FLOAT, false, 6*4, 0*4); // position
                        this.gl.vertexAttribPointer(1, 2, this.gl.FLOAT, false, 6*4, 3*4); // texture
                        engine.shadermanager.UseShader_PT(this.mvp);
                        break;
                        
          case "pnct": 
                        this.gl.enableVertexAttribArray(0);
                        this.gl.enableVertexAttribArray(1);
                        this.gl.enableVertexAttribArray(2);
                        this.gl.enableVertexAttribArray(3);
                        this.gl.vertexAttribPointer(0, 3, this.gl.FLOAT, false, 12*4, 0*4); // position
                        this.gl.vertexAttribPointer(1, 3, this.gl.FLOAT, false, 12*4, 3*4); // normal
                        this.gl.vertexAttribPointer(2, 4, this.gl.FLOAT, false, 12*4, 6*4); // color
                        this.gl.vertexAttribPointer(3, 2, this.gl.FLOAT, false, 12*4, 10*4); // texture
                        engine.shadermanager.UseShader_PNCT(this.mvp);
                        break;
                             
             
         default:       
                        alert("unknown mesh mode!!");
         
      }
  

      switch(this.indexsemantic)
      {
         case "TRIANGLES":
                           this.gl.drawElements(this.gl.TRIANGLES, this.numindex, this.gl.UNSIGNED_SHORT, 0);
                           break;
                        
         case "LINES":     
                           this.gl.drawElements(this.gl.LINES, this.numindex, this.gl.UNSIGNED_SHORT, 0);
                           break;
                           
         case "POINTS":     
                           this.gl.drawElements(this.gl.POINTS, this.numindex, this.gl.UNSIGNED_SHORT, 0);
                           break;             
                        
         default:          
                           alert("unknown indexsemantic");
      }
          
     this.gl.disableVertexAttribArray(0);
     this.gl.disableVertexAttribArray(1);
     this.gl.disableVertexAttribArray(2);
     this.gl.disableVertexAttribArray(3);  
}

//------------------------------------------------------------------------------
Mesh.prototype.loadFromJSON = function(url)
{
   
   if(url == null) 
   {
      alert("invalid json-url");
      return;
   }  
   this.jsonUrl=url;
   
   http=new window.XMLHttpRequest();
   http.open("GET",this.jsonUrl,true);
   me=this;
   http.onreadystatechange = function(){_cbfjsondownload(me);};
   http.send();  
}


//------------------------------------------------------------------------------
_cbfjsondownload = function(mesh)
{
   if (http.readyState==4)
   {
      if(http.status==404)
      {
         console.log('Mesh, JSON Download. File not found.');
      }
      else
      {
         var data=http.responseText;      
         var jsonobject=JSON.parse(data);
         
         switch(jsonobject.VertexSemantic)
         {
            case "p":      mesh.numvertex = jsonobject.Vertices.length/3;    
                           mesh.SetBufferP(jsonobject.Vertices);
                           mesh.mode = "p";
                                
                           break;
                            
            case "pnt":    mesh.numvertex = jsonobject.Vertices.length/8;
                           mesh.SetBufferPNT(jsonobject.Vertices);
                           mesh.mode = "pnt";
                           
                           break;
                           
            case "pc":     mesh.numvertex = jsonobject.Vertices.length/7; 
                           mesh.mode = "pc";
                           mesh.SetBufferPC(jsonobject.Vertices); 
                           break;
                           
            case "pt":     mesh.numvertex = jsonobject.Vertices.length/5; 
                           mesh.mode = "pt";   
                           mesh.SetBufferPT(jsonobject.Vertices);                     
                           break;
                           
            case "pnct":   mesh.numvertex = jsonobject.Vertices.length/12;
                           mesh.mode = "p";
                           mesh.SetBufferPNCT(jsonobject.Vertices); 
                           break;
        
            default:       
                           alert("unknown mesh mode!!");
         }      
         mesh.SetIndexBuffer(jsonobject.Indices,jsonobject.IndexSemantic);
         
         
         mesh.numindex = jsonobject.Indices.length;         // number of elements of index vector
         mesh.Ready = true; 
         
         if(mesh.cbfJSONLoad)
         {
            mesh.cbfJSONLoad();
         }
      }     
   }    
}

//------------------------------------------------------------------------------

Mesh.prototype.SetJSONLoadCallback = function(f)
{
   this.cbfJSONLoad = f;
   
}




