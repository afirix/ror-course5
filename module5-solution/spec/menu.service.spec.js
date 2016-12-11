describe('menu service', function () {

  var MenuService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      MenuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return a known item', function () {
    var itemId = 'A1';
    var menuItem = {
      'id': 1,
      'short_name': 'A1',
      'name': 'Won Ton Soup with Chicken',
      'description': 'chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions',
      'price_small': 2.55,
      'price_large': 5.0,
      'small_portion_name': 'pint',
      'large_portion_name': 'quart',
      'created_at': '2016-12-07T04:34:22.729Z',
      'updated_at': '2016-12-07T04:34:22.729Z',
      'category_short_name': 'A',
      'image_present': true
    };

    $httpBackend
      .whenGET(ApiPath + '/menu_items/' + itemId + '.json')
      .respond(200, menuItem);
    MenuService.getMenuItem(itemId).then(function (response) {
      expect(response).toEqual(menuItem);
    });
    $httpBackend.flush();
  });

  it('should not return an unknown item', function () {
    var itemId = 'A0';
    var errorResponse = {
      'status': '500',
      'error': 'Internal Server Error'
    };

    $httpBackend
      .whenGET(ApiPath + '/menu_items/' + itemId + '.json')
      .respond(500, errorResponse);
    MenuService.getMenuItem(itemId).catch(function (response) {
      expect(response.data).toEqual(errorResponse);
    });
    $httpBackend.flush();
  });
});
