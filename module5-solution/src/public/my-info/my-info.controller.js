(function () {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user', 'favoriteDish'];
  function MyInfoController(user, favoriteDish) {
    var myInfoCtrl = this;
    myInfoCtrl.user = user;
    myInfoCtrl.favoriteDish = favoriteDish;
  }
})();
