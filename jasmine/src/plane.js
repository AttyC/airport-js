'use strict'

function Plane(){
  this._landed = false;
};
Plane.prototype.land = function(airport) {
  this._landed = true;
};
