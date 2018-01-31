'use strict'

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['land'])
  });
  it('lands at an airport', function(){
    plane.land(airport);
  });

});
