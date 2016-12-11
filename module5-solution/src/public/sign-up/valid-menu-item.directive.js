(function () {
  'use strict';

  angular.module('public')
  .directive('validMenuItem', ValidMenuItem);

  ValidMenuItem.$inject = ['$q', 'MenuService'];
  function ValidMenuItem($q, MenuService) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function LinkFunction(scope, element, attrs, ctrl) {
        ctrl.$asyncValidators.menuItemExists = function (modelValue, viewValue) {
          var value = modelValue || viewValue;
          var deferred = $q.defer();

          if (!value) {
            deferred.resolve();
          } else {
            MenuService.getMenuItem(value)
              .then(function (response) {
                deferred.resolve();
              }, function (error) {
                deferred.reject();
              });
          }
          return deferred.promise;
        };
      }
    }
  }
})();
