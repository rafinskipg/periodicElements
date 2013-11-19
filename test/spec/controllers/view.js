'use strict';

describe('Controller: ViewCtrl', function () {

  // load the controller's module
  beforeEach(module('ejercicioApp'));

  var MainCtrl,
    $httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('../json/periodicTable.json').
          respond({
            "table": [
              {
                "wiki": "http://en.wikipedia.org/wiki/Period%201%20element",
                "elements": [
                  {
                    "group": "",
                    "position": 0,
                    "number": 1,
                    "name": "Hydrogen",
                    "molar": 1.00794,
                    "small": "H",
                    "electrons": [
                      1
                    ]
                  },
                  {
                    "group": "Element Noble p",
                    "position": 17,
                    "number": 2,
                    "name": "Helium",
                    "molar": 4.002602,
                    "small": "He",
                    "electrons": [
                      2
                    ]
                  }
                ]
              }
              ]
            }
          );

    $routeParams.item = "H";

    scope = $rootScope.$new();
    MainCtrl = $controller('ViewCtrl', {
      $scope: scope
    });
  }));

  it('should get element', function () {
      $httpBackend.flush();

      expect(scope.element.small).toEqual("H");
  });
});
