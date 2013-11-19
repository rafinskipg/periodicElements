'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ejercicioApp'));

  var MainCtrl,
    $httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('../json/periodicTable.json').
          respond([{name: 'H'}, {name: 'BE'}]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of periodic elmenets', function () {
    expect(scope.elements).toEqual([]);
      $httpBackend.flush();

      expect(scope.elements).toEqual(
          [{name: 'H'}, {name: 'BE'}]);
  });
});
