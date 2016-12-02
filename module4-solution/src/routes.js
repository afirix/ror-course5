(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
  function RoutesConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
    // .state('items', {
    //   url: '/items/{categoryShortName}',
    //   templateUrl: 'src/menuapp/templates/items.template.html',
    //   controller: 'ItemsController as itemsCtrl',
    //   resolve: {
    //     items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
    //       // console.log("inside resolve");
    //       // console.log($stateParams.categoryShortName);
    //       // console.log(MenuDataService.getItemsForCategory($stateParams.categoryShortName));
    //       return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
    //     }]
    //   }
    // });
  };
})();
