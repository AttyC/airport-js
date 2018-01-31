'use strict'

describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land'])
  });
  it('starts with an empty hangar', function(){
    expect(airport._hangar).toEqual([]);
  });
  it('can accept planes for landing', function(){
    airport.letPlaneLand(plane)
    expect(airport._hangar).toEqual([plane]);
  });

});
