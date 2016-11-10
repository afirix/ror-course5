(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.analyzeMenu = function() {
      var menu = $scope.menu;
      if (isStringEmpty(menu)) {
        $scope.messageText = 'Please enter data first';
        $scope.messageClass = 'menu-failure';
      } else {
        $scope.messageText = checkMenuLength(menu);
        $scope.messageClass = 'menu-success';
      }
    };

    function isStringEmpty(str) {
      return !str || str.length === 0
    };

    function checkMenuLength(menu) {
      var items = menu.split(',');
      var nonEmptyItemsCount = 0;
      for (var i = 0; i < items.length; i++) {
        if (!isStringEmpty(items[i])) {
          nonEmptyItemsCount++;
        }
      }

      return (nonEmptyItemsCount <= 3)
        ? 'Enjoy!'
        : 'Too much!';
    };
  }
})();
