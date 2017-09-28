/*describe("Test suite of my Angular App", function(){
  var $controller;
  beforeEach(function(){
    module('FormDemoApp');
    inject(function(_$controller_){
      $controller = _$controller_;
    });
  });
  it("First Angular Test Case", function(){
    var $scope = {};
    var controller = $controller('myController', {$scope: $scope});
    expect($scope.working).toBe(true);
  });
});
*/
describe("myController", function(){
    var $controller;
    var scope;
    beforeEach(module('FormDemoApp'));
    beforeEach(inject(function(_$controller_, $rootScope){
      $controller = _$controller_;
      scope = $rootScope.$new();
    }));
    it("should have three expense items", function(){
        var ctrl = $controller('myController', {$scope: scope});
        expect(ctrl.working).toBe(true);
        expect(ctrl.fruits.length).toBe(8);
        //console.log(ctrl.onlineFruits);
        //expect(ctrl.onlineFruits.length).toBe(8);
    });
});
