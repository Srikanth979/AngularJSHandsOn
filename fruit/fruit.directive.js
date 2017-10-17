angular.module('FormDemoApp')
  .directive('fruitDirective', function(){
    return {
      restrict: 'E',
      scope: {
        fruits: '=',
        directiveWorking: '=working'
      },
      template: `<p><div>Hi Everyone! this is the new directive</div></p>
      <ol>
      <li ng-repeat="f in fruits">{{f}}</li>
      </ol>`,
      controller: function($scope){
        // renaming value passed into custom directive
        //console.log($scope.directiveWorking);
      },
    };
  });
