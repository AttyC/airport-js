describe('Feature Test: ', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });
  it('instructs plane to land at an airport', function(){
    plane.land(airport);
    expect(airport._hangar).toContain(plane)
  });

});
