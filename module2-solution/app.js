(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.toBuyList;

    this.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.alreadyBoughtList;
  };

  function ShoppingListCheckOffService() {
    this.toBuyList = [
      {name: 'Apples', quantity: 4},
      {name: 'Pears', quantity: 6},
      {name: 'Pineapples', quantity: 2},
      {name: 'Peaches', quantity: 10},
      {name: 'Plums', quantity: 9},
      {name: 'Bananas', quantity: 3},
      {name: 'Oranges', quantity: 3},
    ];
    this.alreadyBoughtList = [];

    this.buyItem = function(index) {
      if (index >= 0 && index < this.toBuyList.length) {
        this.alreadyBoughtList.push(this.toBuyList[index]);
        this.toBuyList.splice(index, 1);
      }
    };
  }
})();
