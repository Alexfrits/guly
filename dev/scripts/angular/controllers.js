// liste des astuces
var hintsListControllers = angular.module('hintsListControllers', []);

hintsListControllers.controller('HintsListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('app-data/hints.json')
    .success(function(data) {
      $scope.hints = data;
    });

    $scope.orderProp = 'age';
  }
]);

hintsListControllers.controller('HintDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.astuceId = $routeParams.astuceId;
  }
]);

// validation du form
var formControllers = angular.module('formControllers', []);

formControllers.controller('FormCtrl', ['$scope',
  function($scope) {
    // $scope.master = {};
    // $scope.update = function(user) {
    //   $scope.master = angular.copy(user);
    // };
  }
]);

// switch button

var switchControllers = angular.module('switchControllers', []);

switchControllers.controller('uiSwitchCtrl', function($scope) {
  $scope.notif = true;
  $scope.smart = true;

  $scope.changeCallback = function() {
    //$scope.enabled = false;
  };
});