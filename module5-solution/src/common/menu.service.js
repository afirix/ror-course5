(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$q', '$http', 'ApiPath'];
function MenuService($q, $http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (itemId) {
    return $http.get(ApiPath + '/menu_items/' + itemId + '.json')
      .then(function (response) {
        return response.data;
      }, function (response) {
        return $q.reject(response);
      });
  };

}



})();
