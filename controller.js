angular.module("FormDemoApp",[])
.controller("myController", ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
  $scope.username = '';
  $scope.password = '';
  $scope.working = true;
  $scope.fruits = ["Apple", "Custard Apple", "Orange", "Grape", "Pear", "kiwi", "PineApple", "Banana"];
  $scope.someFruits = ["Apple", "Custard Apple", "Orange", "Grape", "Pear", "kiwi", "PineApple", "Banana"];
  $scope.someFruits.splice(2,1);
  $scope.error = ''
  $scope.fruit = '';
  $scope.addFruit = function(fruit){
    if(fruit !== ''){
      $scope.fruits.push(fruit);
      $scope.errorBlk = false;
      $scope.fruit = '';
    }else{
      $scope.errorBlk = true;
      $scope.error = 'Please enter a Fruit!';
    }
  };
  $scope.removeFruit = function(index){
    $scope.fruits.splice(index,1);
  };

  $scope.onlineFruits = [];
  $http.get('./Fruits.json').then(function(res){
    console.log("result: "+res.data.fruits);
    $scope.onlineFruits = res.data.fruits;
  }, function(err){console.log("Error catched: "+err)});

}]);
