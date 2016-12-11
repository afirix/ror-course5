(function () {
  'use strict';

  angular.module('public')
  .component('infoTable', {
    templateUrl: 'src/public/my-info/info-table/info-table.html',
    bindings: {
      user: '<',
      favoriteDish: '<'
    }
  });
})();
