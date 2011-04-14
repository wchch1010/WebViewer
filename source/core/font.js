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
#                           martin.christen@fhnw.ch                            #
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

As a special  exception to the  GPL, any HTML  file which merely  makes function
calls to  this code,  and for  that purpose  includes it  by reference, shall be
deemed a separate work for copyright law purposes. If you modify this code,  you
may extend this exception to your version of the code, but you are not obligated
to do so. If you do not wish to do so, delete this exception statement from your
version.

Commercial License

OEMs (Original  Equipment Manufacturers),  ISVs (Independent  Software Vendors),
VARs (Value Added Resellers) and other distributors that combine and  distribute
commercially licensed  software with  i3D OpenWebGlobe  SDK and  do not  wish to
distribute the source code for the commercially licensed software under  version
2 of the  GNU General Public  License (the "GPL")  must enter into  a commercial
license agreement with the Institute of Geomatics Engineering at the  University
of Applied Sciences Northwestern Switzerland (FHNW).
*******************************************************************************/


/*
 * @description array with fontwidth value example: width of char 'A' = fontwidth[65];
 */
var fontwidth = new Array(14,28,14,14,14,14,14,14,14,96,0,14,14,0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,0,0,0,8,8,10,16,16,25,19,5,9,9,11,16,8,9,8,8,16,16,16,16,16,16,16,16,16,16,8,8,16,16,16,16,28,19,19,20,20,19,17,22,20,8,14,19,16,23,20,22,19,22,20,19,16,20,19,28,19,18,17,8,8,8,14,16,9,15,16,14,16,15,7,16,16,6,6,14,6,24,16,15,16,16,9,14,8,16,13,19,13,13,14,9,6,9,16,8,16,0,6,16,9,28,16,16,9,29,19,9,28,0,17,0,0,6,6,9,9,10,16,28,8,28,14,9,26,0,14,19,8,8,16,16,16,16,6,16,9,21,10,16,16,9,21,15,11,15,9,9,9,16,15,9,9,9,10,16,23,23,23,17,19,19,19,19,19,19,28,20,19,19,19,19,8,8,8,8,20,20,22,22,22,22,22,16,22,20,20,20,20,19,19,17,16,16,16,16,16,16,25,14,16,16,16,16,8,8,8,8,16,16,16,16,16,16,16,15,17,16,16,16,16,14,16,14);

//------------------------------------------------------------------------------
/** 
 * @class font
 * {@link http://www.openwebglobe.org} 
 * @author Martin Christen martin.christen@fhnw.ch
 * @author Benjamin Loesch benjamin.loesch@fhnw.ch
 */
function Font(engine)
{
   this.engine = engine;
   this.gl = engine.gl;
   
   this.fontmesh = new Mesh(engine);
   this.fontmesh.SetBufferPT([ 0, 31, 0, 0, 0, 0, 0, 0, 0, 0.0625, 31, 0, 0, 0.0625, 0.0625, 31, 31, 0, 0.0625, 0, 0, 31, 0, 0.0625, 0, 0, 0, 0, 0.0625, 0.0625, 31, 0, 0, 0.125, 0.0625, 31, 31, 0, 0.125, 0, 0, 31, 0, 0.125, 0, 0, 0, 0, 0.125, 0.0625, 31, 0, 0, 0.1875, 0.0625, 31, 31, 0, 0.1875, 0, 0, 31, 0, 0.1875, 0, 0, 0, 0, 0.1875, 0.0625, 31, 0, 0, 0.25, 0.0625, 31, 31, 0, 0.25, 0, 0, 31, 0, 0.25, 0, 0, 0, 0, 0.25, 0.0625, 31, 0, 0, 0.3125, 0.0625, 31, 31, 0, 0.3125, 0, 0, 31, 0, 0.3125, 0, 0, 0, 0, 0.3125, 0.0625, 31, 0, 0, 0.375, 0.0625, 31, 31, 0, 0.375, 0, 0, 31, 0, 0.375, 0, 0, 0, 0, 0.375, 0.0625, 31, 0, 0, 0.4375, 0.0625, 31, 31, 0, 0.4375, 0, 0, 31, 0, 0.4375, 0, 0, 0, 0, 0.4375, 0.0625, 31, 0, 0, 0.5, 0.0625, 31, 31, 0, 0.5, 0, 0, 31, 0, 0.5, 0, 0, 0, 0, 0.5, 0.0625, 31, 0, 0, 0.5625, 0.0625, 31, 31, 0, 0.5625, 0, 0, 31, 0, 0.5625, 0, 0, 0, 0, 0.5625, 0.0625, 31, 0, 0, 0.625, 0.0625, 31, 31, 0, 0.625, 0, 0, 31, 0, 0.625, 0, 0, 0, 0, 0.625, 0.0625, 31, 0, 0, 0.6875, 0.0625, 31, 31, 0, 0.6875, 0, 0, 31, 0, 0.6875, 0, 0, 0, 0, 0.6875, 0.0625, 31, 0, 0, 0.75, 0.0625, 31, 31, 0, 0.75, 0, 0, 31, 0, 0.75, 0, 0, 0, 0, 0.75, 0.0625, 31, 0, 0, 0.8125, 0.0625, 31, 31, 0, 0.8125, 0, 0, 31, 0, 0.8125, 0, 0, 0, 0, 0.8125, 0.0625, 31, 0, 0, 0.875, 0.0625, 31, 31, 0, 0.875, 0, 0, 31, 0, 0.875, 0, 0, 0, 0, 0.875, 0.0625, 31, 0, 0, 0.9375, 0.0625, 31, 31, 0, 0.9375, 0, 0, 31, 0, 0.9375, 0, 0, 0, 0, 0.9375, 0.0625, 31, 0, 0, 1, 0.0625, 31, 31, 0, 1, 0, 0, 31, 0, 0, 0.0625, 0, 0, 0, 0, 0.125, 31, 0, 0, 0.0625, 0.125, 31, 31, 0, 0.0625, 0.0625, 0, 31, 0, 0.0625, 0.0625, 0, 0, 0, 0.0625, 0.125, 31, 0, 0, 0.125, 0.125, 31, 31, 0, 0.125, 0.0625, 0, 31, 0, 0.125, 0.0625, 0, 0, 0, 0.125, 0.125, 31, 0, 0, 0.1875, 0.125, 31, 31, 0, 0.1875, 0.0625, 0, 31, 0, 0.1875, 0.0625, 0, 0, 0, 0.1875, 0.125, 31, 0, 0, 0.25, 0.125, 31, 31, 0, 0.25, 0.0625, 0, 31, 0, 0.25, 0.0625, 0, 0, 0, 0.25, 0.125, 31, 0, 0, 0.3125, 0.125, 31, 31, 0, 0.3125, 0.0625, 0, 31, 0, 0.3125, 0.0625, 0, 0, 0, 0.3125, 0.125, 31, 0, 0, 0.375, 0.125, 31, 31, 0, 0.375, 0.0625, 0, 31, 0, 0.375, 0.0625, 0, 0, 0, 0.375, 0.125, 31, 0, 0, 0.4375, 0.125, 31, 31, 0, 0.4375, 0.0625, 0, 31, 0, 0.4375, 0.0625, 0, 0, 0, 0.4375, 0.125, 31, 0, 0, 0.5, 0.125, 31, 31, 0, 0.5, 0.0625, 0, 31, 0, 0.5, 0.0625, 0, 0, 0, 0.5, 0.125, 31, 0, 0, 0.5625, 0.125, 31, 31, 0, 0.5625, 0.0625, 0, 31, 0, 0.5625, 0.0625, 0, 0, 0, 0.5625, 0.125, 31, 0, 0, 0.625, 0.125, 31, 31, 0, 0.625, 0.0625, 0, 31, 0, 0.625, 0.0625, 0, 0, 0, 0.625, 0.125, 31, 0, 0, 0.6875, 0.125, 31, 31, 0, 0.6875, 0.0625, 0, 31, 0, 0.6875, 0.0625, 0, 0, 0, 0.6875, 0.125, 31, 0, 0, 0.75, 0.125, 31, 31, 0, 0.75, 0.0625, 0, 31, 0, 0.75, 0.0625, 0, 0, 0, 0.75, 0.125, 31, 0, 0, 0.8125, 0.125, 31, 31, 0, 0.8125, 0.0625, 0, 31, 0, 0.8125, 0.0625, 0, 0, 0, 0.8125, 0.125, 31, 0, 0, 0.875, 0.125, 31, 31, 0, 0.875, 0.0625, 0, 31, 0, 0.875, 0.0625, 0, 0, 0, 0.875, 0.125, 31, 0, 0, 0.9375, 0.125, 31, 31, 0, 0.9375, 0.0625, 0, 31, 0, 0.9375, 0.0625, 0, 0, 0, 0.9375, 0.125, 31, 0, 0, 1, 0.125, 31, 31, 0, 1, 0.0625, 0, 31, 0, 0, 0.125, 0, 0, 0, 0, 0.1875, 31, 0, 0, 0.0625, 0.1875, 31, 31, 0, 0.0625, 0.125, 0, 31, 0, 0.0625, 0.125, 0, 0, 0, 0.0625, 0.1875, 31, 0, 0, 0.125, 0.1875, 31, 31, 0, 0.125, 0.125, 0, 31, 0, 0.125, 0.125, 0, 0, 0, 0.125, 0.1875, 31, 0, 0, 0.1875, 0.1875, 31, 31, 0, 0.1875, 0.125, 0, 31, 0, 0.1875, 0.125, 0, 0, 0, 0.1875, 0.1875, 31, 0, 0, 0.25, 0.1875, 31, 31, 0, 0.25, 0.125, 0, 31, 0, 0.25, 0.125, 0, 0, 0, 0.25, 0.1875, 31, 0, 0, 0.3125, 0.1875, 31, 31, 0, 0.3125, 0.125, 0, 31, 0, 0.3125, 0.125, 0, 0, 0, 0.3125, 0.1875, 31, 0, 0, 0.375, 0.1875, 31, 31, 0, 0.375, 0.125, 0, 31, 0, 0.375, 0.125, 0, 0, 0, 0.375, 0.1875, 31, 0, 0, 0.4375, 0.1875, 31, 31, 0, 0.4375, 0.125, 0, 31, 0, 0.4375, 0.125, 0, 0, 0, 0.4375, 0.1875, 31, 0, 0, 0.5, 0.1875, 31, 31, 0, 0.5, 0.125, 0, 31, 0, 0.5, 0.125, 0, 0, 0, 0.5, 0.1875, 31, 0, 0, 0.5625, 0.1875, 31, 31, 0, 0.5625, 0.125, 0, 31, 0, 0.5625, 0.125, 0, 0, 0, 0.5625, 0.1875, 31, 0, 0, 0.625, 0.1875, 31, 31, 0, 0.625, 0.125, 0, 31, 0, 0.625, 0.125, 0, 0, 0, 0.625, 0.1875, 31, 0, 0, 0.6875, 0.1875, 31, 31, 0, 0.6875, 0.125, 0, 31, 0, 0.6875, 0.125, 0, 0, 0, 0.6875, 0.1875, 31, 0, 0, 0.75, 0.1875, 31, 31, 0, 0.75, 0.125, 0, 31, 0, 0.75, 0.125, 0, 0, 0, 0.75, 0.1875, 31, 0, 0, 0.8125, 0.1875, 31, 31, 0, 0.8125, 0.125, 0, 31, 0, 0.8125, 0.125, 0, 0, 0, 0.8125, 0.1875, 31, 0, 0, 0.875, 0.1875, 31, 31, 0, 0.875, 0.125, 0, 31, 0, 0.875, 0.125, 0, 0, 0, 0.875, 0.1875, 31, 0, 0, 0.9375, 0.1875, 31, 31, 0, 0.9375, 0.125, 0, 31, 0, 0.9375, 0.125, 0, 0, 0, 0.9375, 0.1875, 31, 0, 0, 1, 0.1875, 31, 31, 0, 1, 0.125, 0, 31, 0, 0, 0.1875, 0, 0, 0, 0, 0.25, 31, 0, 0, 0.0625, 0.25, 31, 31, 0, 0.0625, 0.1875, 0, 31, 0, 0.0625, 0.1875, 0, 0, 0, 0.0625, 0.25, 31, 0, 0, 0.125, 0.25, 31, 31, 0, 0.125, 0.1875, 0, 31, 0, 0.125, 0.1875, 0, 0, 0, 0.125, 0.25, 31, 0, 0, 0.1875, 0.25, 31, 31, 0, 0.1875, 0.1875, 0, 31, 0, 0.1875, 0.1875, 0, 0, 0, 0.1875, 0.25, 31, 0, 0, 0.25, 0.25, 31, 31, 0, 0.25, 0.1875, 0, 31, 0, 0.25, 0.1875, 0, 0, 0, 0.25, 0.25, 31, 0, 0, 0.3125, 0.25, 31, 31, 0, 0.3125, 0.1875, 0, 31, 0, 0.3125, 0.1875, 0, 0, 0, 0.3125, 0.25, 31, 0, 0, 0.375, 0.25, 31, 31, 0, 0.375, 0.1875, 0, 31, 0, 0.375, 0.1875, 0, 0, 0, 0.375, 0.25, 31, 0, 0, 0.4375, 0.25, 31, 31, 0, 0.4375, 0.1875, 0, 31, 0, 0.4375, 0.1875, 0, 0, 0, 0.4375, 0.25, 31, 0, 0, 0.5, 0.25, 31, 31, 0, 0.5, 0.1875, 0, 31, 0, 0.5, 0.1875, 0, 0, 0, 0.5, 0.25, 31, 0, 0, 0.5625, 0.25, 31, 31, 0, 0.5625, 0.1875, 0, 31, 0, 0.5625, 0.1875, 0, 0, 0, 0.5625, 0.25, 31, 0, 0, 0.625, 0.25, 31, 31, 0, 0.625, 0.1875, 0, 31, 0, 0.625, 0.1875, 0, 0, 0, 0.625, 0.25, 31, 0, 0, 0.6875, 0.25, 31, 31, 0, 0.6875, 0.1875, 0, 31, 0, 0.6875, 0.1875, 0, 0, 0, 0.6875, 0.25, 31, 0, 0, 0.75, 0.25, 31, 31, 0, 0.75, 0.1875, 0, 31, 0, 0.75, 0.1875, 0, 0, 0, 0.75, 0.25, 31, 0, 0, 0.8125, 0.25, 31, 31, 0, 0.8125, 0.1875, 0, 31, 0, 0.8125, 0.1875, 0, 0, 0, 0.8125, 0.25, 31, 0, 0, 0.875, 0.25, 31, 31, 0, 0.875, 0.1875, 0, 31, 0, 0.875, 0.1875, 0, 0, 0, 0.875, 0.25, 31, 0, 0, 0.9375, 0.25, 31, 31, 0, 0.9375, 0.1875, 0, 31, 0, 0.9375, 0.1875, 0, 0, 0, 0.9375, 0.25, 31, 0, 0, 1, 0.25, 31, 31, 0, 1, 0.1875, 0, 31, 0, 0, 0.25, 0, 0, 0, 0, 0.3125, 31, 0, 0, 0.0625, 0.3125, 31, 31, 0, 0.0625, 0.25, 0, 31, 0, 0.0625, 0.25, 0, 0, 0, 0.0625, 0.3125, 31, 0, 0, 0.125, 0.3125, 31, 31, 0, 0.125, 0.25, 0, 31, 0, 0.125, 0.25, 0, 0, 0, 0.125, 0.3125, 31, 0, 0, 0.1875, 0.3125, 31, 31, 0, 0.1875, 0.25, 0, 31, 0, 0.1875, 0.25, 0, 0, 0, 0.1875, 0.3125, 31, 0, 0, 0.25, 0.3125, 31, 31, 0, 0.25, 0.25, 0, 31, 0, 0.25, 0.25, 0, 0, 0, 0.25, 0.3125, 31, 0, 0, 0.3125, 0.3125, 31, 31, 0, 0.3125, 0.25, 0, 31, 0, 0.3125, 0.25, 0, 0, 0, 0.3125, 0.3125, 31, 0, 0, 0.375, 0.3125, 31, 31, 0, 0.375, 0.25, 0, 31, 0, 0.375, 0.25, 0, 0, 0, 0.375, 0.3125, 31, 0, 0, 0.4375, 0.3125, 31, 31, 0, 0.4375, 0.25, 0, 31, 0, 0.4375, 0.25, 0, 0, 0, 0.4375, 0.3125, 31, 0, 0, 0.5, 0.3125, 31, 31, 0, 0.5, 0.25, 0, 31, 0, 0.5, 0.25, 0, 0, 0, 0.5, 0.3125, 31, 0, 0, 0.5625, 0.3125, 31, 31, 0, 0.5625, 0.25, 0, 31, 0, 0.5625, 0.25, 0, 0, 0, 0.5625, 0.3125, 31, 0, 0, 0.625, 0.3125, 31, 31, 0, 0.625, 0.25, 0, 31, 0, 0.625, 0.25, 0, 0, 0, 0.625, 0.3125, 31, 0, 0, 0.6875, 0.3125, 31, 31, 0, 0.6875, 0.25, 0, 31, 0, 0.6875, 0.25, 0, 0, 0, 0.6875, 0.3125, 31, 0, 0, 0.75, 0.3125, 31, 31, 0, 0.75, 0.25, 0, 31, 0, 0.75, 0.25, 0, 0, 0, 0.75, 0.3125, 31, 0, 0, 0.8125, 0.3125, 31, 31, 0, 0.8125, 0.25, 0, 31, 0, 0.8125, 0.25, 0, 0, 0, 0.8125, 0.3125, 31, 0, 0, 0.875, 0.3125, 31, 31, 0, 0.875, 0.25, 0, 31, 0, 0.875, 0.25, 0, 0, 0, 0.875, 0.3125, 31, 0, 0, 0.9375, 0.3125, 31, 31, 0, 0.9375, 0.25, 0, 31, 0, 0.9375, 0.25, 0, 0, 0, 0.9375, 0.3125, 31, 0, 0, 1, 0.3125, 31, 31, 0, 1, 0.25, 0, 31, 0, 0, 0.3125, 0, 0, 0, 0, 0.375, 31, 0, 0, 0.0625, 0.375, 31, 31, 0, 0.0625, 0.3125, 0, 31, 0, 0.0625, 0.3125, 0, 0, 0, 0.0625, 0.375, 31, 0, 0, 0.125, 0.375, 31, 31, 0, 0.125, 0.3125, 0, 31, 0, 0.125, 0.3125, 0, 0, 0, 0.125, 0.375, 31, 0, 0, 0.1875, 0.375, 31, 31, 0, 0.1875, 0.3125, 0, 31, 0, 0.1875, 0.3125, 0, 0, 0, 0.1875, 0.375, 31, 0, 0, 0.25, 0.375, 31, 31, 0, 0.25, 0.3125, 0, 31, 0, 0.25, 0.3125, 0, 0, 0, 0.25, 0.375, 31, 0, 0, 0.3125, 0.375, 31, 31, 0, 0.3125, 0.3125, 0, 31, 0, 0.3125, 0.3125, 0, 0, 0, 0.3125, 0.375, 31, 0, 0, 0.375, 0.375, 31, 31, 0, 0.375, 0.3125, 0, 31, 0, 0.375, 0.3125, 0, 0, 0, 0.375, 0.375, 31, 0, 0, 0.4375, 0.375, 31, 31, 0, 0.4375, 0.3125, 0, 31, 0, 0.4375, 0.3125, 0, 0, 0, 0.4375, 0.375, 31, 0, 0, 0.5, 0.375, 31, 31, 0, 0.5, 0.3125, 0, 31, 0, 0.5, 0.3125, 0, 0, 0, 0.5, 0.375, 31, 0, 0, 0.5625, 0.375, 31, 31, 0, 0.5625, 0.3125, 0, 31, 0, 0.5625, 0.3125, 0, 0, 0, 0.5625, 0.375, 31, 0, 0, 0.625, 0.375, 31, 31, 0, 0.625, 0.3125, 0, 31, 0, 0.625, 0.3125, 0, 0, 0, 0.625, 0.375, 31, 0, 0, 0.6875, 0.375, 31, 31, 0, 0.6875, 0.3125, 0, 31, 0, 0.6875, 0.3125, 0, 0, 0, 0.6875, 0.375, 31, 0, 0, 0.75, 0.375, 31, 31, 0, 0.75, 0.3125, 0, 31, 0, 0.75, 0.3125, 0, 0, 0, 0.75, 0.375, 31, 0, 0, 0.8125, 0.375, 31, 31, 0, 0.8125, 0.3125, 0, 31, 0, 0.8125, 0.3125, 0, 0, 0, 0.8125, 0.375, 31, 0, 0, 0.875, 0.375, 31, 31, 0, 0.875, 0.3125, 0, 31, 0, 0.875, 0.3125, 0, 0, 0, 0.875, 0.375, 31, 0, 0, 0.9375, 0.375, 31, 31, 0, 0.9375, 0.3125, 0, 31, 0, 0.9375, 0.3125, 0, 0, 0, 0.9375, 0.375, 31, 0, 0, 1, 0.375, 31, 31, 0, 1, 0.3125, 0, 31, 0, 0, 0.375, 0, 0, 0, 0, 0.4375, 31, 0, 0, 0.0625, 0.4375, 31, 31, 0, 0.0625, 0.375, 0, 31, 0, 0.0625, 0.375, 0, 0, 0, 0.0625, 0.4375, 31, 0, 0, 0.125, 0.4375, 31, 31, 0, 0.125, 0.375, 0, 31, 0, 0.125, 0.375, 0, 0, 0, 0.125, 0.4375, 31, 0, 0, 0.1875, 0.4375, 31, 31, 0, 0.1875, 0.375, 0, 31, 0, 0.1875, 0.375, 0, 0, 0, 0.1875, 0.4375, 31, 0, 0, 0.25, 0.4375, 31, 31, 0, 0.25, 0.375, 0, 31, 0, 0.25, 0.375, 0, 0, 0, 0.25, 0.4375, 31, 0, 0, 0.3125, 0.4375, 31, 31, 0, 0.3125, 0.375, 0, 31, 0, 0.3125, 0.375, 0, 0, 0, 0.3125, 0.4375, 31, 0, 0, 0.375, 0.4375, 31, 31, 0, 0.375, 0.375, 0, 31, 0, 0.375, 0.375, 0, 0, 0, 0.375, 0.4375, 31, 0, 0, 0.4375, 0.4375, 31, 31, 0, 0.4375, 0.375, 0, 31, 0, 0.4375, 0.375, 0, 0, 0, 0.4375, 0.4375, 31, 0, 0, 0.5, 0.4375, 31, 31, 0, 0.5, 0.375, 0, 31, 0, 0.5, 0.375, 0, 0, 0, 0.5, 0.4375, 31, 0, 0, 0.5625, 0.4375, 31, 31, 0, 0.5625, 0.375, 0, 31, 0, 0.5625, 0.375, 0, 0, 0, 0.5625, 0.4375, 31, 0, 0, 0.625, 0.4375, 31, 31, 0, 0.625, 0.375, 0, 31, 0, 0.625, 0.375, 0, 0, 0, 0.625, 0.4375, 31, 0, 0, 0.6875, 0.4375, 31, 31, 0, 0.6875, 0.375, 0, 31, 0, 0.6875, 0.375, 0, 0, 0, 0.6875, 0.4375, 31, 0, 0, 0.75, 0.4375, 31, 31, 0, 0.75, 0.375, 0, 31, 0, 0.75, 0.375, 0, 0, 0, 0.75, 0.4375, 31, 0, 0, 0.8125, 0.4375, 31, 31, 0, 0.8125, 0.375, 0, 31, 0, 0.8125, 0.375, 0, 0, 0, 0.8125, 0.4375, 31, 0, 0, 0.875, 0.4375, 31, 31, 0, 0.875, 0.375, 0, 31, 0, 0.875, 0.375, 0, 0, 0, 0.875, 0.4375, 31, 0, 0, 0.9375, 0.4375, 31, 31, 0, 0.9375, 0.375, 0, 31, 0, 0.9375, 0.375, 0, 0, 0, 0.9375, 0.4375, 31, 0, 0, 1, 0.4375, 31, 31, 0, 1, 0.375, 0, 31, 0, 0, 0.4375, 0, 0, 0, 0, 0.5, 31, 0, 0, 0.0625, 0.5, 31, 31, 0, 0.0625, 0.4375, 0, 31, 0, 0.0625, 0.4375, 0, 0, 0, 0.0625, 0.5, 31, 0, 0, 0.125, 0.5, 31, 31, 0, 0.125, 0.4375, 0, 31, 0, 0.125, 0.4375, 0, 0, 0, 0.125, 0.5, 31, 0, 0, 0.1875, 0.5, 31, 31, 0, 0.1875, 0.4375, 0, 31, 0, 0.1875, 0.4375, 0, 0, 0, 0.1875, 0.5, 31, 0, 0, 0.25, 0.5, 31, 31, 0, 0.25, 0.4375, 0, 31, 0, 0.25, 0.4375, 0, 0, 0, 0.25, 0.5, 31, 0, 0, 0.3125, 0.5, 31, 31, 0, 0.3125, 0.4375, 0, 31, 0, 0.3125, 0.4375, 0, 0, 0, 0.3125, 0.5, 31, 0, 0, 0.375, 0.5, 31, 31, 0, 0.375, 0.4375, 0, 31, 0, 0.375, 0.4375, 0, 0, 0, 0.375, 0.5, 31, 0, 0, 0.4375, 0.5, 31, 31, 0, 0.4375, 0.4375, 0, 31, 0, 0.4375, 0.4375, 0, 0, 0, 0.4375, 0.5, 31, 0, 0, 0.5, 0.5, 31, 31, 0, 0.5, 0.4375, 0, 31, 0, 0.5, 0.4375, 0, 0, 0, 0.5, 0.5, 31, 0, 0, 0.5625, 0.5, 31, 31, 0, 0.5625, 0.4375, 0, 31, 0, 0.5625, 0.4375, 0, 0, 0, 0.5625, 0.5, 31, 0, 0, 0.625, 0.5, 31, 31, 0, 0.625, 0.4375, 0, 31, 0, 0.625, 0.4375, 0, 0, 0, 0.625, 0.5, 31, 0, 0, 0.6875, 0.5, 31, 31, 0, 0.6875, 0.4375, 0, 31, 0, 0.6875, 0.4375, 0, 0, 0, 0.6875, 0.5, 31, 0, 0, 0.75, 0.5, 31, 31, 0, 0.75, 0.4375, 0, 31, 0, 0.75, 0.4375, 0, 0, 0, 0.75, 0.5, 31, 0, 0, 0.8125, 0.5, 31, 31, 0, 0.8125, 0.4375, 0, 31, 0, 0.8125, 0.4375, 0, 0, 0, 0.8125, 0.5, 31, 0, 0, 0.875, 0.5, 31, 31, 0, 0.875, 0.4375, 0, 31, 0, 0.875, 0.4375, 0, 0, 0, 0.875, 0.5, 31, 0, 0, 0.9375, 0.5, 31, 31, 0, 0.9375, 0.4375, 0, 31, 0, 0.9375, 0.4375, 0, 0, 0, 0.9375, 0.5, 31, 0, 0, 1, 0.5, 31, 31, 0, 1, 0.4375, 0, 31, 0, 0, 0.5, 0, 0, 0, 0, 0.5625, 31, 0, 0, 0.0625, 0.5625, 31, 31, 0, 0.0625, 0.5, 0, 31, 0, 0.0625, 0.5, 0, 0, 0, 0.0625, 0.5625, 31, 0, 0, 0.125, 0.5625, 31, 31, 0, 0.125, 0.5, 0, 31, 0, 0.125, 0.5, 0, 0, 0, 0.125, 0.5625, 31, 0, 0, 0.1875, 0.5625, 31, 31, 0, 0.1875, 0.5, 0, 31, 0, 0.1875, 0.5, 0, 0, 0, 0.1875, 0.5625, 31, 0, 0, 0.25, 0.5625, 31, 31, 0, 0.25, 0.5, 0, 31, 0, 0.25, 0.5, 0, 0, 0, 0.25, 0.5625, 31, 0, 0, 0.3125, 0.5625, 31, 31, 0, 0.3125, 0.5, 0, 31, 0, 0.3125, 0.5, 0, 0, 0, 0.3125, 0.5625, 31, 0, 0, 0.375, 0.5625, 31, 31, 0, 0.375, 0.5, 0, 31, 0, 0.375, 0.5, 0, 0, 0, 0.375, 0.5625, 31, 0, 0, 0.4375, 0.5625, 31, 31, 0, 0.4375, 0.5, 0, 31, 0, 0.4375, 0.5, 0, 0, 0, 0.4375, 0.5625, 31, 0, 0, 0.5, 0.5625, 31, 31, 0, 0.5, 0.5, 0, 31, 0, 0.5, 0.5, 0, 0, 0, 0.5, 0.5625, 31, 0, 0, 0.5625, 0.5625, 31, 31, 0, 0.5625, 0.5, 0, 31, 0, 0.5625, 0.5, 0, 0, 0, 0.5625, 0.5625, 31, 0, 0, 0.625, 0.5625, 31, 31, 0, 0.625, 0.5, 0, 31, 0, 0.625, 0.5, 0, 0, 0, 0.625, 0.5625, 31, 0, 0, 0.6875, 0.5625, 31, 31, 0, 0.6875, 0.5, 0, 31, 0, 0.6875, 0.5, 0, 0, 0, 0.6875, 0.5625, 31, 0, 0, 0.75, 0.5625, 31, 31, 0, 0.75, 0.5, 0, 31, 0, 0.75, 0.5, 0, 0, 0, 0.75, 0.5625, 31, 0, 0, 0.8125, 0.5625, 31, 31, 0, 0.8125, 0.5, 0, 31, 0, 0.8125, 0.5, 0, 0, 0, 0.8125, 0.5625, 31, 0, 0, 0.875, 0.5625, 31, 31, 0, 0.875, 0.5, 0, 31, 0, 0.875, 0.5, 0, 0, 0, 0.875, 0.5625, 31, 0, 0, 0.9375, 0.5625, 31, 31, 0, 0.9375, 0.5, 0, 31, 0, 0.9375, 0.5, 0, 0, 0, 0.9375, 0.5625, 31, 0, 0, 1, 0.5625, 31, 31, 0, 1, 0.5, 0, 31, 0, 0, 0.5625, 0, 0, 0, 0, 0.625, 31, 0, 0, 0.0625, 0.625, 31, 31, 0, 0.0625, 0.5625, 0, 31, 0, 0.0625, 0.5625, 0, 0, 0, 0.0625, 0.625, 31, 0, 0, 0.125, 0.625, 31, 31, 0, 0.125, 0.5625, 0, 31, 0, 0.125, 0.5625, 0, 0, 0, 0.125, 0.625, 31, 0, 0, 0.1875, 0.625, 31, 31, 0, 0.1875, 0.5625, 0, 31, 0, 0.1875, 0.5625, 0, 0, 0, 0.1875, 0.625, 31, 0, 0, 0.25, 0.625, 31, 31, 0, 0.25, 0.5625, 0, 31, 0, 0.25, 0.5625, 0, 0, 0, 0.25, 0.625, 31, 0, 0, 0.3125, 0.625, 31, 31, 0, 0.3125, 0.5625, 0, 31, 0, 0.3125, 0.5625, 0, 0, 0, 0.3125, 0.625, 31, 0, 0, 0.375, 0.625, 31, 31, 0, 0.375, 0.5625, 0, 31, 0, 0.375, 0.5625, 0, 0, 0, 0.375, 0.625, 31, 0, 0, 0.4375, 0.625, 31, 31, 0, 0.4375, 0.5625, 0, 31, 0, 0.4375, 0.5625, 0, 0, 0, 0.4375, 0.625, 31, 0, 0, 0.5, 0.625, 31, 31, 0, 0.5, 0.5625, 0, 31, 0, 0.5, 0.5625, 0, 0, 0, 0.5, 0.625, 31, 0, 0, 0.5625, 0.625, 31, 31, 0, 0.5625, 0.5625, 0, 31, 0, 0.5625, 0.5625, 0, 0, 0, 0.5625, 0.625, 31, 0, 0, 0.625, 0.625, 31, 31, 0, 0.625, 0.5625, 0, 31, 0, 0.625, 0.5625, 0, 0, 0, 0.625, 0.625, 31, 0, 0, 0.6875, 0.625, 31, 31, 0, 0.6875, 0.5625, 0, 31, 0, 0.6875, 0.5625, 0, 0, 0, 0.6875, 0.625, 31, 0, 0, 0.75, 0.625, 31, 31, 0, 0.75, 0.5625, 0, 31, 0, 0.75, 0.5625, 0, 0, 0, 0.75, 0.625, 31, 0, 0, 0.8125, 0.625, 31, 31, 0, 0.8125, 0.5625, 0, 31, 0, 0.8125, 0.5625, 0, 0, 0, 0.8125, 0.625, 31, 0, 0, 0.875, 0.625, 31, 31, 0, 0.875, 0.5625, 0, 31, 0, 0.875, 0.5625, 0, 0, 0, 0.875, 0.625, 31, 0, 0, 0.9375, 0.625, 31, 31, 0, 0.9375, 0.5625, 0, 31, 0, 0.9375, 0.5625, 0, 0, 0, 0.9375, 0.625, 31, 0, 0, 1, 0.625, 31, 31, 0, 1, 0.5625, 0, 31, 0, 0, 0.625, 0, 0, 0, 0, 0.6875, 31, 0, 0, 0.0625, 0.6875, 31, 31, 0, 0.0625, 0.625, 0, 31, 0, 0.0625, 0.625, 0, 0, 0, 0.0625, 0.6875, 31, 0, 0, 0.125, 0.6875, 31, 31, 0, 0.125, 0.625, 0, 31, 0, 0.125, 0.625, 0, 0, 0, 0.125, 0.6875, 31, 0, 0, 0.1875, 0.6875, 31, 31, 0, 0.1875, 0.625, 0, 31, 0, 0.1875, 0.625, 0, 0, 0, 0.1875, 0.6875, 31, 0, 0, 0.25, 0.6875, 31, 31, 0, 0.25, 0.625, 0, 31, 0, 0.25, 0.625, 0, 0, 0, 0.25, 0.6875, 31, 0, 0, 0.3125, 0.6875, 31, 31, 0, 0.3125, 0.625, 0, 31, 0, 0.3125, 0.625, 0, 0, 0, 0.3125, 0.6875, 31, 0, 0, 0.375, 0.6875, 31, 31, 0, 0.375, 0.625, 0, 31, 0, 0.375, 0.625, 0, 0, 0, 0.375, 0.6875, 31, 0, 0, 0.4375, 0.6875, 31, 31, 0, 0.4375, 0.625, 0, 31, 0, 0.4375, 0.625, 0, 0, 0, 0.4375, 0.6875, 31, 0, 0, 0.5, 0.6875, 31, 31, 0, 0.5, 0.625, 0, 31, 0, 0.5, 0.625, 0, 0, 0, 0.5, 0.6875, 31, 0, 0, 0.5625, 0.6875, 31, 31, 0, 0.5625, 0.625, 0, 31, 0, 0.5625, 0.625, 0, 0, 0, 0.5625, 0.6875, 31, 0, 0, 0.625, 0.6875, 31, 31, 0, 0.625, 0.625, 0, 31, 0, 0.625, 0.625, 0, 0, 0, 0.625, 0.6875, 31, 0, 0, 0.6875, 0.6875, 31, 31, 0, 0.6875, 0.625, 0, 31, 0, 0.6875, 0.625, 0, 0, 0, 0.6875, 0.6875, 31, 0, 0, 0.75, 0.6875, 31, 31, 0, 0.75, 0.625, 0, 31, 0, 0.75, 0.625, 0, 0, 0, 0.75, 0.6875, 31, 0, 0, 0.8125, 0.6875, 31, 31, 0, 0.8125, 0.625, 0, 31, 0, 0.8125, 0.625, 0, 0, 0, 0.8125, 0.6875, 31, 0, 0, 0.875, 0.6875, 31, 31, 0, 0.875, 0.625, 0, 31, 0, 0.875, 0.625, 0, 0, 0, 0.875, 0.6875, 31, 0, 0, 0.9375, 0.6875, 31, 31, 0, 0.9375, 0.625, 0, 31, 0, 0.9375, 0.625, 0, 0, 0, 0.9375, 0.6875, 31, 0, 0, 1, 0.6875, 31, 31, 0, 1, 0.625, 0, 31, 0, 0, 0.6875, 0, 0, 0, 0, 0.75, 31, 0, 0, 0.0625, 0.75, 31, 31, 0, 0.0625, 0.6875, 0, 31, 0, 0.0625, 0.6875, 0, 0, 0, 0.0625, 0.75, 31, 0, 0, 0.125, 0.75, 31, 31, 0, 0.125, 0.6875, 0, 31, 0, 0.125, 0.6875, 0, 0, 0, 0.125, 0.75, 31, 0, 0, 0.1875, 0.75, 31, 31, 0, 0.1875, 0.6875, 0, 31, 0, 0.1875, 0.6875, 0, 0, 0, 0.1875, 0.75, 31, 0, 0, 0.25, 0.75, 31, 31, 0, 0.25, 0.6875, 0, 31, 0, 0.25, 0.6875, 0, 0, 0, 0.25, 0.75, 31, 0, 0, 0.3125, 0.75, 31, 31, 0, 0.3125, 0.6875, 0, 31, 0, 0.3125, 0.6875, 0, 0, 0, 0.3125, 0.75, 31, 0, 0, 0.375, 0.75, 31, 31, 0, 0.375, 0.6875, 0, 31, 0, 0.375, 0.6875, 0, 0, 0, 0.375, 0.75, 31, 0, 0, 0.4375, 0.75, 31, 31, 0, 0.4375, 0.6875, 0, 31, 0, 0.4375, 0.6875, 0, 0, 0, 0.4375, 0.75, 31, 0, 0, 0.5, 0.75, 31, 31, 0, 0.5, 0.6875, 0, 31, 0, 0.5, 0.6875, 0, 0, 0, 0.5, 0.75, 31, 0, 0, 0.5625, 0.75, 31, 31, 0, 0.5625, 0.6875, 0, 31, 0, 0.5625, 0.6875, 0, 0, 0, 0.5625, 0.75, 31, 0, 0, 0.625, 0.75, 31, 31, 0, 0.625, 0.6875, 0, 31, 0, 0.625, 0.6875, 0, 0, 0, 0.625, 0.75, 31, 0, 0, 0.6875, 0.75, 31, 31, 0, 0.6875, 0.6875, 0, 31, 0, 0.6875, 0.6875, 0, 0, 0, 0.6875, 0.75, 31, 0, 0, 0.75, 0.75, 31, 31, 0, 0.75, 0.6875, 0, 31, 0, 0.75, 0.6875, 0, 0, 0, 0.75, 0.75, 31, 0, 0, 0.8125, 0.75, 31, 31, 0, 0.8125, 0.6875, 0, 31, 0, 0.8125, 0.6875, 0, 0, 0, 0.8125, 0.75, 31, 0, 0, 0.875, 0.75, 31, 31, 0, 0.875, 0.6875, 0, 31, 0, 0.875, 0.6875, 0, 0, 0, 0.875, 0.75, 31, 0, 0, 0.9375, 0.75, 31, 31, 0, 0.9375, 0.6875, 0, 31, 0, 0.9375, 0.6875, 0, 0, 0, 0.9375, 0.75, 31, 0, 0, 1, 0.75, 31, 31, 0, 1, 0.6875, 0, 31, 0, 0, 0.75, 0, 0, 0, 0, 0.8125, 31, 0, 0, 0.0625, 0.8125, 31, 31, 0, 0.0625, 0.75, 0, 31, 0, 0.0625, 0.75, 0, 0, 0, 0.0625, 0.8125, 31, 0, 0, 0.125, 0.8125, 31, 31, 0, 0.125, 0.75, 0, 31, 0, 0.125, 0.75, 0, 0, 0, 0.125, 0.8125, 31, 0, 0, 0.1875, 0.8125, 31, 31, 0, 0.1875, 0.75, 0, 31, 0, 0.1875, 0.75, 0, 0, 0, 0.1875, 0.8125, 31, 0, 0, 0.25, 0.8125, 31, 31, 0, 0.25, 0.75, 0, 31, 0, 0.25, 0.75, 0, 0, 0, 0.25, 0.8125, 31, 0, 0, 0.3125, 0.8125, 31, 31, 0, 0.3125, 0.75, 0, 31, 0, 0.3125, 0.75, 0, 0, 0, 0.3125, 0.8125, 31, 0, 0, 0.375, 0.8125, 31, 31, 0, 0.375, 0.75, 0, 31, 0, 0.375, 0.75, 0, 0, 0, 0.375, 0.8125, 31, 0, 0, 0.4375, 0.8125, 31, 31, 0, 0.4375, 0.75, 0, 31, 0, 0.4375, 0.75, 0, 0, 0, 0.4375, 0.8125, 31, 0, 0, 0.5, 0.8125, 31, 31, 0, 0.5, 0.75, 0, 31, 0, 0.5, 0.75, 0, 0, 0, 0.5, 0.8125, 31, 0, 0, 0.5625, 0.8125, 31, 31, 0, 0.5625, 0.75, 0, 31, 0, 0.5625, 0.75, 0, 0, 0, 0.5625, 0.8125, 31, 0, 0, 0.625, 0.8125, 31, 31, 0, 0.625, 0.75, 0, 31, 0, 0.625, 0.75, 0, 0, 0, 0.625, 0.8125, 31, 0, 0, 0.6875, 0.8125, 31, 31, 0, 0.6875, 0.75, 0, 31, 0, 0.6875, 0.75, 0, 0, 0, 0.6875, 0.8125, 31, 0, 0, 0.75, 0.8125, 31, 31, 0, 0.75, 0.75, 0, 31, 0, 0.75, 0.75, 0, 0, 0, 0.75, 0.8125, 31, 0, 0, 0.8125, 0.8125, 31, 31, 0, 0.8125, 0.75, 0, 31, 0, 0.8125, 0.75, 0, 0, 0, 0.8125, 0.8125, 31, 0, 0, 0.875, 0.8125, 31, 31, 0, 0.875, 0.75, 0, 31, 0, 0.875, 0.75, 0, 0, 0, 0.875, 0.8125, 31, 0, 0, 0.9375, 0.8125, 31, 31, 0, 0.9375, 0.75, 0, 31, 0, 0.9375, 0.75, 0, 0, 0, 0.9375, 0.8125, 31, 0, 0, 1, 0.8125, 31, 31, 0, 1, 0.75, 0, 31, 0, 0, 0.8125, 0, 0, 0, 0, 0.875, 31, 0, 0, 0.0625, 0.875, 31, 31, 0, 0.0625, 0.8125, 0, 31, 0, 0.0625, 0.8125, 0, 0, 0, 0.0625, 0.875, 31, 0, 0, 0.125, 0.875, 31, 31, 0, 0.125, 0.8125, 0, 31, 0, 0.125, 0.8125, 0, 0, 0, 0.125, 0.875, 31, 0, 0, 0.1875, 0.875, 31, 31, 0, 0.1875, 0.8125, 0, 31, 0, 0.1875, 0.8125, 0, 0, 0, 0.1875, 0.875, 31, 0, 0, 0.25, 0.875, 31, 31, 0, 0.25, 0.8125, 0, 31, 0, 0.25, 0.8125, 0, 0, 0, 0.25, 0.875, 31, 0, 0, 0.3125, 0.875, 31, 31, 0, 0.3125, 0.8125, 0, 31, 0, 0.3125, 0.8125, 0, 0, 0, 0.3125, 0.875, 31, 0, 0, 0.375, 0.875, 31, 31, 0, 0.375, 0.8125, 0, 31, 0, 0.375, 0.8125, 0, 0, 0, 0.375, 0.875, 31, 0, 0, 0.4375, 0.875, 31, 31, 0, 0.4375, 0.8125, 0, 31, 0, 0.4375, 0.8125, 0, 0, 0, 0.4375, 0.875, 31, 0, 0, 0.5, 0.875, 31, 31, 0, 0.5, 0.8125, 0, 31, 0, 0.5, 0.8125, 0, 0, 0, 0.5, 0.875, 31, 0, 0, 0.5625, 0.875, 31, 31, 0, 0.5625, 0.8125, 0, 31, 0, 0.5625, 0.8125, 0, 0, 0, 0.5625, 0.875, 31, 0, 0, 0.625, 0.875, 31, 31, 0, 0.625, 0.8125, 0, 31, 0, 0.625, 0.8125, 0, 0, 0, 0.625, 0.875, 31, 0, 0, 0.6875, 0.875, 31, 31, 0, 0.6875, 0.8125, 0, 31, 0, 0.6875, 0.8125, 0, 0, 0, 0.6875, 0.875, 31, 0, 0, 0.75, 0.875, 31, 31, 0, 0.75, 0.8125, 0, 31, 0, 0.75, 0.8125, 0, 0, 0, 0.75, 0.875, 31, 0, 0, 0.8125, 0.875, 31, 31, 0, 0.8125, 0.8125, 0, 31, 0, 0.8125, 0.8125, 0, 0, 0, 0.8125, 0.875, 31, 0, 0, 0.875, 0.875, 31, 31, 0, 0.875, 0.8125, 0, 31, 0, 0.875, 0.8125, 0, 0, 0, 0.875, 0.875, 31, 0, 0, 0.9375, 0.875, 31, 31, 0, 0.9375, 0.8125, 0, 31, 0, 0.9375, 0.8125, 0, 0, 0, 0.9375, 0.875, 31, 0, 0, 1, 0.875, 31, 31, 0, 1, 0.8125, 0, 31, 0, 0, 0.875, 0, 0, 0, 0, 0.9375, 31, 0, 0, 0.0625, 0.9375, 31, 31, 0, 0.0625, 0.875, 0, 31, 0, 0.0625, 0.875, 0, 0, 0, 0.0625, 0.9375, 31, 0, 0, 0.125, 0.9375, 31, 31, 0, 0.125, 0.875, 0, 31, 0, 0.125, 0.875, 0, 0, 0, 0.125, 0.9375, 31, 0, 0, 0.1875, 0.9375, 31, 31, 0, 0.1875, 0.875, 0, 31, 0, 0.1875, 0.875, 0, 0, 0, 0.1875, 0.9375, 31, 0, 0, 0.25, 0.9375, 31, 31, 0, 0.25, 0.875, 0, 31, 0, 0.25, 0.875, 0, 0, 0, 0.25, 0.9375, 31, 0, 0, 0.3125, 0.9375, 31, 31, 0, 0.3125, 0.875, 0, 31, 0, 0.3125, 0.875, 0, 0, 0, 0.3125, 0.9375, 31, 0, 0, 0.375, 0.9375, 31, 31, 0, 0.375, 0.875, 0, 31, 0, 0.375, 0.875, 0, 0, 0, 0.375, 0.9375, 31, 0, 0, 0.4375, 0.9375, 31, 31, 0, 0.4375, 0.875, 0, 31, 0, 0.4375, 0.875, 0, 0, 0, 0.4375, 0.9375, 31, 0, 0, 0.5, 0.9375, 31, 31, 0, 0.5, 0.875, 0, 31, 0, 0.5, 0.875, 0, 0, 0, 0.5, 0.9375, 31, 0, 0, 0.5625, 0.9375, 31, 31, 0, 0.5625, 0.875, 0, 31, 0, 0.5625, 0.875, 0, 0, 0, 0.5625, 0.9375, 31, 0, 0, 0.625, 0.9375, 31, 31, 0, 0.625, 0.875, 0, 31, 0, 0.625, 0.875, 0, 0, 0, 0.625, 0.9375, 31, 0, 0, 0.6875, 0.9375, 31, 31, 0, 0.6875, 0.875, 0, 31, 0, 0.6875, 0.875, 0, 0, 0, 0.6875, 0.9375, 31, 0, 0, 0.75, 0.9375, 31, 31, 0, 0.75, 0.875, 0, 31, 0, 0.75, 0.875, 0, 0, 0, 0.75, 0.9375, 31, 0, 0, 0.8125, 0.9375, 31, 31, 0, 0.8125, 0.875, 0, 31, 0, 0.8125, 0.875, 0, 0, 0, 0.8125, 0.9375, 31, 0, 0, 0.875, 0.9375, 31, 31, 0, 0.875, 0.875, 0, 31, 0, 0.875, 0.875, 0, 0, 0, 0.875, 0.9375, 31, 0, 0, 0.9375, 0.9375, 31, 31, 0, 0.9375, 0.875, 0, 31, 0, 0.9375, 0.875, 0, 0, 0, 0.9375, 0.9375, 31, 0, 0, 1, 0.9375, 31, 31, 0, 1, 0.875, 0, 31, 0, 0, 0.9375, 0, 0, 0, 0, 1, 31, 0, 0, 0.0625, 1, 31, 31, 0, 0.0625, 0.9375, 0, 31, 0, 0.0625, 0.9375, 0, 0, 0, 0.0625, 1, 31, 0, 0, 0.125, 1, 31, 31, 0, 0.125, 0.9375, 0, 31, 0, 0.125, 0.9375, 0, 0, 0, 0.125, 1, 31, 0, 0, 0.1875, 1, 31, 31, 0, 0.1875, 0.9375, 0, 31, 0, 0.1875, 0.9375, 0, 0, 0, 0.1875, 1, 31, 0, 0, 0.25, 1, 31, 31, 0, 0.25, 0.9375, 0, 31, 0, 0.25, 0.9375, 0, 0, 0, 0.25, 1, 31, 0, 0, 0.3125, 1, 31, 31, 0, 0.3125, 0.9375, 0, 31, 0, 0.3125, 0.9375, 0, 0, 0, 0.3125, 1, 31, 0, 0, 0.375, 1, 31, 31, 0, 0.375, 0.9375, 0, 31, 0, 0.375, 0.9375, 0, 0, 0, 0.375, 1, 31, 0, 0, 0.4375, 1, 31, 31, 0, 0.4375, 0.9375, 0, 31, 0, 0.4375, 0.9375, 0, 0, 0, 0.4375, 1, 31, 0, 0, 0.5, 1, 31, 31, 0, 0.5, 0.9375, 0, 31, 0, 0.5, 0.9375, 0, 0, 0, 0.5, 1, 31, 0, 0, 0.5625, 1, 31, 31, 0, 0.5625, 0.9375, 0, 31, 0, 0.5625, 0.9375, 0, 0, 0, 0.5625, 1, 31, 0, 0, 0.625, 1, 31, 31, 0, 0.625, 0.9375, 0, 31, 0, 0.625, 0.9375, 0, 0, 0, 0.625, 1, 31, 0, 0, 0.6875, 1, 31, 31, 0, 0.6875, 0.9375, 0, 31, 0, 0.6875, 0.9375, 0, 0, 0, 0.6875, 1, 31, 0, 0, 0.75, 1, 31, 31, 0, 0.75, 0.9375, 0, 31, 0, 0.75, 0.9375, 0, 0, 0, 0.75, 1, 31, 0, 0, 0.8125, 1, 31, 31, 0, 0.8125, 0.9375, 0, 31, 0, 0.8125, 0.9375, 0, 0, 0, 0.8125, 1, 31, 0, 0, 0.875, 1, 31, 31, 0, 0.875, 0.9375, 0, 31, 0, 0.875, 0.9375, 0, 0, 0, 0.875, 1, 31, 0, 0, 0.9375, 1, 31, 31, 0, 0.9375, 0.9375, 0, 31, 0, 0.9375, 0.9375, 0, 0, 0, 0.9375, 1, 31, 0, 0, 1, 1, 31, 31, 0, 1, 0.9375]);  
   this.fontmesh.SetIndexBuffer([ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23, 24, 25, 26, 24, 26, 27, 28, 29, 30, 28, 30, 31, 32, 33, 34, 32, 34, 35, 36, 37, 38, 36, 38, 39, 40, 41, 42, 40, 42, 43, 44, 45, 46, 44, 46, 47, 48, 49, 50, 48, 50, 51, 52, 53, 54, 52, 54, 55, 56, 57, 58, 56, 58, 59, 60, 61, 62, 60, 62, 63, 64, 65, 66, 64, 66, 67, 68, 69, 70, 68, 70, 71, 72, 73, 74, 72, 74, 75, 76, 77, 78, 76, 78, 79, 80, 81, 82, 80, 82, 83, 84, 85, 86, 84, 86, 87, 88, 89, 90, 88, 90, 91, 92, 93, 94, 92, 94, 95, 96, 97, 98, 96, 98, 99, 100, 101, 102, 100, 102, 103, 104, 105, 106, 104, 106, 107, 108, 109, 110, 108, 110, 111, 112, 113, 114, 112, 114, 115, 116, 117, 118, 116, 118, 119, 120, 121, 122, 120, 122, 123, 124, 125, 126, 124, 126, 127, 128, 129, 130, 128, 130, 131, 132, 133, 134, 132, 134, 135, 136, 137, 138, 136, 138, 139, 140, 141, 142, 140, 142, 143, 144, 145, 146, 144, 146, 147, 148, 149, 150, 148, 150, 151, 152, 153, 154, 152, 154, 155, 156, 157, 158, 156, 158, 159, 160, 161, 162, 160, 162, 163, 164, 165, 166, 164, 166, 167, 168, 169, 170, 168, 170, 171, 172, 173, 174, 172, 174, 175, 176, 177, 178, 176, 178, 179, 180, 181, 182, 180, 182, 183, 184, 185, 186, 184, 186, 187, 188, 189, 190, 188, 190, 191, 192, 193, 194, 192, 194, 195, 196, 197, 198, 196, 198, 199, 200, 201, 202, 200, 202, 203, 204, 205, 206, 204, 206, 207, 208, 209, 210, 208, 210, 211, 212, 213, 214, 212, 214, 215, 216, 217, 218, 216, 218, 219, 220, 221, 222, 220, 222, 223, 224, 225, 226, 224, 226, 227, 228, 229, 230, 228, 230, 231, 232, 233, 234, 232, 234, 235, 236, 237, 238, 236, 238, 239, 240, 241, 242, 240, 242, 243, 244, 245, 246, 244, 246, 247, 248, 249, 250, 248, 250, 251, 252, 253, 254, 252, 254, 255, 256, 257, 258, 256, 258, 259, 260, 261, 262, 260, 262, 263, 264, 265, 266, 264, 266, 267, 268, 269, 270, 268, 270, 271, 272, 273, 274, 272, 274, 275, 276, 277, 278, 276, 278, 279, 280, 281, 282, 280, 282, 283, 284, 285, 286, 284, 286, 287, 288, 289, 290, 288, 290, 291, 292, 293, 294, 292, 294, 295, 296, 297, 298, 296, 298, 299, 300, 301, 302, 300, 302, 303, 304, 305, 306, 304, 306, 307, 308, 309, 310, 308, 310, 311, 312, 313, 314, 312, 314, 315, 316, 317, 318, 316, 318, 319, 320, 321, 322, 320, 322, 323, 324, 325, 326, 324, 326, 327, 328, 329, 330, 328, 330, 331, 332, 333, 334, 332, 334, 335, 336, 337, 338, 336, 338, 339, 340, 341, 342, 340, 342, 343, 344, 345, 346, 344, 346, 347, 348, 349, 350, 348, 350, 351, 352, 353, 354, 352, 354, 355, 356, 357, 358, 356, 358, 359, 360, 361, 362, 360, 362, 363, 364, 365, 366, 364, 366, 367, 368, 369, 370, 368, 370, 371, 372, 373, 374, 372, 374, 375, 376, 377, 378, 376, 378, 379, 380, 381, 382, 380, 382, 383, 384, 385, 386, 384, 386, 387, 388, 389, 390, 388, 390, 391, 392, 393, 394, 392, 394, 395, 396, 397, 398, 396, 398, 399, 400, 401, 402, 400, 402, 403, 404, 405, 406, 404, 406, 407, 408, 409, 410, 408, 410, 411, 412, 413, 414, 412, 414, 415, 416, 417, 418, 416, 418, 419, 420, 421, 422, 420, 422, 423, 424, 425, 426, 424, 426, 427, 428, 429, 430, 428, 430, 431, 432, 433, 434, 432, 434, 435, 436, 437, 438, 436, 438, 439, 440, 441, 442, 440, 442, 443, 444, 445, 446, 444, 446, 447, 448, 449, 450, 448, 450, 451, 452, 453, 454, 452, 454, 455, 456, 457, 458, 456, 458, 459, 460, 461, 462, 460, 462, 463, 464, 465, 466, 464, 466, 467, 468, 469, 470, 468, 470, 471, 472, 473, 474, 472, 474, 475, 476, 477, 478, 476, 478, 479, 480, 481, 482, 480, 482, 483, 484, 485, 486, 484, 486, 487, 488, 489, 490, 488, 490, 491, 492, 493, 494, 492, 494, 495, 496, 497, 498, 496, 498, 499, 500, 501, 502, 500, 502, 503, 504, 505, 506, 504, 506, 507, 508, 509, 510, 508, 510, 511, 512, 513, 514, 512, 514, 515, 516, 517, 518, 516, 518, 519, 520, 521, 522, 520, 522, 523, 524, 525, 526, 524, 526, 527, 528, 529, 530, 528, 530, 531, 532, 533, 534, 532, 534, 535, 536, 537, 538, 536, 538, 539, 540, 541, 542, 540, 542, 543, 544, 545, 546, 544, 546, 547, 548, 549, 550, 548, 550, 551, 552, 553, 554, 552, 554, 555, 556, 557, 558, 556, 558, 559, 560, 561, 562, 560, 562, 563, 564, 565, 566, 564, 566, 567, 568, 569, 570, 568, 570, 571, 572, 573, 574, 572, 574, 575, 576, 577, 578, 576, 578, 579, 580, 581, 582, 580, 582, 583, 584, 585, 586, 584, 586, 587, 588, 589, 590, 588, 590, 591, 592, 593, 594, 592, 594, 595, 596, 597, 598, 596, 598, 599, 600, 601, 602, 600, 602, 603, 604, 605, 606, 604, 606, 607, 608, 609, 610, 608, 610, 611, 612, 613, 614, 612, 614, 615, 616, 617, 618, 616, 618, 619, 620, 621, 622, 620, 622, 623, 624, 625, 626, 624, 626, 627, 628, 629, 630, 628, 630, 631, 632, 633, 634, 632, 634, 635, 636, 637, 638, 636, 638, 639, 640, 641, 642, 640, 642, 643, 644, 645, 646, 644, 646, 647, 648, 649, 650, 648, 650, 651, 652, 653, 654, 652, 654, 655, 656, 657, 658, 656, 658, 659, 660, 661, 662, 660, 662, 663, 664, 665, 666, 664, 666, 667, 668, 669, 670, 668, 670, 671, 672, 673, 674, 672, 674, 675, 676, 677, 678, 676, 678, 679, 680, 681, 682, 680, 682, 683, 684, 685, 686, 684, 686, 687, 688, 689, 690, 688, 690, 691, 692, 693, 694, 692, 694, 695, 696, 697, 698, 696, 698, 699, 700, 701, 702, 700, 702, 703, 704, 705, 706, 704, 706, 707, 708, 709, 710, 708, 710, 711, 712, 713, 714, 712, 714, 715, 716, 717, 718, 716, 718, 719, 720, 721, 722, 720, 722, 723, 724, 725, 726, 724, 726, 727, 728, 729, 730, 728, 730, 731, 732, 733, 734, 732, 734, 735, 736, 737, 738, 736, 738, 739, 740, 741, 742, 740, 742, 743, 744, 745, 746, 744, 746, 747, 748, 749, 750, 748, 750, 751, 752, 753, 754, 752, 754, 755, 756, 757, 758, 756, 758, 759, 760, 761, 762, 760, 762, 763, 764, 765, 766, 764, 766, 767, 768, 769, 770, 768, 770, 771, 772, 773, 774, 772, 774, 775, 776, 777, 778, 776, 778, 779, 780, 781, 782, 780, 782, 783, 784, 785, 786, 784, 786, 787, 788, 789, 790, 788, 790, 791, 792, 793, 794, 792, 794, 795, 796, 797, 798, 796, 798, 799, 800, 801, 802, 800, 802, 803, 804, 805, 806, 804, 806, 807, 808, 809, 810, 808, 810, 811, 812, 813, 814, 812, 814, 815, 816, 817, 818, 816, 818, 819, 820, 821, 822, 820, 822, 823, 824, 825, 826, 824, 826, 827, 828, 829, 830, 828, 830, 831, 832, 833, 834, 832, 834, 835, 836, 837, 838, 836, 838, 839, 840, 841, 842, 840, 842, 843, 844, 845, 846, 844, 846, 847, 848, 849, 850, 848, 850, 851, 852, 853, 854, 852, 854, 855, 856, 857, 858, 856, 858, 859, 860, 861, 862, 860, 862, 863, 864, 865, 866, 864, 866, 867, 868, 869, 870, 868, 870, 871, 872, 873, 874, 872, 874, 875, 876, 877, 878, 876, 878, 879, 880, 881, 882, 880, 882, 883, 884, 885, 886, 884, 886, 887, 888, 889, 890, 888, 890, 891, 892, 893, 894, 892, 894, 895, 896, 897, 898, 896, 898, 899, 900, 901, 902, 900, 902, 903, 904, 905, 906, 904, 906, 907, 908, 909, 910, 908, 910, 911, 912, 913, 914, 912, 914, 915, 916, 917, 918, 916, 918, 919, 920, 921, 922, 920, 922, 923, 924, 925, 926, 924, 926, 927, 928, 929, 930, 928, 930, 931, 932, 933, 934, 932, 934, 935, 936, 937, 938, 936, 938, 939, 940, 941, 942, 940, 942, 943, 944, 945, 946, 944, 946, 947, 948, 949, 950, 948, 950, 951, 952, 953, 954, 952, 954, 955, 956, 957, 958, 956, 958, 959, 960, 961, 962, 960, 962, 963, 964, 965, 966, 964, 966, 967, 968, 969, 970, 968, 970, 971, 972, 973, 974, 972, 974, 975, 976, 977, 978, 976, 978, 979, 980, 981, 982, 980, 982, 983, 984, 985, 986, 984, 986, 987, 988, 989, 990, 988, 990, 991, 992, 993, 994, 992, 994, 995, 996, 997, 998, 996, 998, 999, 1000, 1001, 1002, 1000, 1002, 1003, 1004, 1005, 1006, 1004, 1006, 1007, 1008, 1009, 1010, 1008, 1010, 1011, 1012, 1013, 1014, 1012, 1014, 1015, 1016, 1017, 1018, 1016, 1018, 1019, 1020, 1021, 1022, 1020, 1022, 1023],"TRIANGLES");
   
   var tex = new texture(this.engine);
   tex.LoadFontTexture();
   this.fontmesh.SetTexture(tex); 
   
   this.model = new mat4();
   this.strLengthInPixel=0;
}

//------------------------------------------------------------------------------
/**
 * @description Shows the text at position x,y,
 * @param {x} x x position of text
 * @param {y} y y position of text
 */
Font.prototype.DrawText = function(text,x,y)
{
   
      this.engine.PushMatrices();
      this.engine.SetOrtho2D();
      
      this.engine.gl.enable(this.engine.gl.BLEND);
      this.engine.gl.disable(this.engine.gl.DEPTH_TEST);
      this.engine.gl.depthFunc(this.engine.gl.LEQUAL);
      this.engine.gl.blendFunc(this.engine.gl.SRC_ALPHA,this.engine.gl.ONE);
      
      var startX=x;
      var model = new mat4();
      
      var ccode = 0;
    
      for (var i=0; i < text.length; i++)
      {
         
         ccode = text.charCodeAt(i);
         x += fontwidth[ccode]/2;
         model.Translation(x,y,0);
         this.engine.SetModelMatrix(model)
         this.fontmesh.Draw(true,6,ccode*12);
         x += fontwidth[ccode]/2;   
      }
      
      engine.PopMatrices();

      this.engine.gl.disable(this.engine.gl.BLEND);
      this.engine.gl.enable(this.engine.gl.DEPTH_TEST);
     
      this.strLengthInPixel = x-startX;
}

//------------------------------------------------------------------------------
/**
 * @description gets the length of text in pixel
 * @param {x} x x position of text
 * @param {y} y y position of text
 * @return length in pixel
 */
Font.prototype.GetStringWidth = function()
{
   return this.strLengthInPixel;
   
}
//------------------------------------------------------------------------------
/**
 * @description gets the height of text in pixel
 * @return height in pixel (32)
 */
Font.prototype.GetStringHeight = function()
{
   return 32;
   
}









