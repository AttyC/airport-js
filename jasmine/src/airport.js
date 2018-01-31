'use strict'

function Airport(){
  this._hangar = [];
};
Airport.prototype.letPlaneLand = function(plane) {
  this._hangar.push(plane)
};
