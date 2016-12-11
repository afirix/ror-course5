(function () {
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService', 'MenuService'];
  function SignUpController(UserService, MenuService) {
    var signUpCtrl = this;

    signUpCtrl.user = {};

    signUpCtrl.submit = function () {
      UserService.signUp(signUpCtrl.user);
    };
  }
})();
