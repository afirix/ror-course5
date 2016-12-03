(function () {
  'use strict';

  angular.module('MenuApp')
    .component('menuItemsTable', {
      templateUrl: 'src/menuapp/templates/itemsTable.template.html',
      bindings: {
        items: '<'
      }
    });
})();
