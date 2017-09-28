describe("Spy on FruitService", function(){
  beforeEach(module('FormDemoApp'));
  describe('call backs using Jasmine create callbackSpy', function(){
    it('should call back when queried for Fruits', inject(function(FruitService){
      var spyCallBack = jasmine.createSpy('callBackSpy');
      FruitService.queryFruits(spyCallBack);
      expect(spyCallBack).toHaveBeenCalled();
    }));
  });

  describe('spy on', function(){
    it('should spy on queryFruits', inject(function(FruitService){
      var spy = spyOn(FruitService, 'queryFruits');
      FruitService.queryFruits();
      expect(spy).toHaveBeenCalled();
    }));

    it('should spy on queryFruits which return Fake item', inject(function(FruitService){
      var spy = spyOn(FruitService, 'queryFruits').and.callFake(function(){
        return 3;
      });
      expect(FruitService.queryFruits()).toEqual(3);
    }));

  });

});
