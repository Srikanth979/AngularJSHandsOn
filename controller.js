angular.module("FormDemoApp",[])
.controller("myController", ['$timeout', '$http', 'FruitService', function($timeout, $http, fruitService){
  var vm = this;
  vm.username = '';
  vm.password = '';
  vm.working = true;
  vm.fruits = ["Apple", "Custard Apple", "Orange", "Grape", "Pear", "kiwi", "PineApple", "Banana"];
  vm.someFruits = ["Apple", "Custard Apple", "Orange", "Grape", "Pear", "kiwi", "PineApple", "Banana"];
  vm.someFruits.splice(2,1);
  vm.error = ''
  vm.fruit = '';
  vm.addFruit = function(fruit){
    if(fruit !== ''){
      vm.fruits.push(fruit);
      vm.errorBlk = false;
      vm.fruit = '';
    }else{
      vm.errorBlk = true;
      vm.error = 'Please enter a Fruit!';
    }
  };
  vm.removeFruit = function(index){
    vm.fruits.splice(index,1);
  };

  vm.onlineFruits = [];
  fruitService.getOnlineFruits().then(function(data){
    vm.onlineFruits = data;    
  });
}]);
