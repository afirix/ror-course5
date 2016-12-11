(function () {
  "use strict";

  angular.module('public')
  .service('UserService', UserService);

  function UserService() {
    var service = this;

    service.signUp = function (user) {
      service.user = user;
    };

    service.getUser = function () {
      return service.user;
    };
  }
})();
