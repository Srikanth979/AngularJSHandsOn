angular.module('FormDemoApp')
  .service('FruitService', ['$http', '$q', function($http, $q){
    //console.log(http);
    var deferred = $q.defer();
    this.cond = true;
    this.getOnlineFruits = function getOnlineFruits(){
      $http.get('./Fruits.json').then(function(res){
        deferred.resolve(res.data.fruits);
      }, function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    function reportFruits(){
      // do some work
    }

    this.queryFruits = function queryFruits(reportFruits){
      var success = true;
      if(success){
        reportFruits();
      }
    }
  }]);
