(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('apiBasePath', 'https://davids-restaurant.herokuapp.com');

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItemsList.html',
      restrict: 'E',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundCtrl',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var vm = this;

    vm.nonEmpty = function () {
      return (vm.found && vm.found.length !== 0);
    }
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var vm = this;

    vm.found = [];
    vm.searchTerm = '';
    vm.error = '';

    vm.search = function () {
      var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
      promise.then(function (result) {
        vm.found = result;
        vm.error = '';
      })
      .catch(function (error) {
        console.log(error);
        vm.found = [];
        vm.error = error;
      });
    };

    vm.removeItem = function (index) {
      vm.found.splice(index, 1);
    };
  };

  MenuSearchService.$inject = ['$q', '$http', 'apiBasePath'];
  function MenuSearchService($q, $http, apiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var deferred = $q.defer();

      if (searchTerm.length === 0) {
        deferred.reject('Nothing found');
        return deferred.promise;
      } else {
        return $http({
          method: 'GET',
          url: (apiBasePath + '/menu_items.json')
        })
        .then(function (result) {
          return service.filterMenuItemsList(result.data.menu_items, searchTerm);
        });
      }
    };

    service.filterMenuItemsList = function (itemsList, searchTerm) {
      var foundItems = [];
      for (var i = 0; i < itemsList.length; i++) {
        var item = itemsList[i];
        if (item.description.indexOf(searchTerm) !== -1) {
          foundItems.push(item);
        }
      }

      if (foundItems.length === 0) {
        throw 'Nothing found';
      } else {
        return foundItems;
      }
    };
  };
})();
