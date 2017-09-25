describe("Test suite of my Angular App", function(){
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
    console.log($scope.working);
    expect($scope.working).toBe(true);
    // /expect(1).toBe(1);
  });
});
