(function () {
  'use strict';

  angular.module('MenuApp')
    .component('menuItemsList', {
      templateUrl: 'src/menuapp/templates/itemsList.template.html',
      bindings: {
        items: '<',
        category: '<'
      }
    });
})();
