(function () {
  'use strict';

  angular.module('MenuApp')
    .component('menuCategoriesList', {
      templateUrl: 'src/menuapp/templates/categoriesList.template.html',
      bindings: {
        categories: '<'
      }
    });
})();
