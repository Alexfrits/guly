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
