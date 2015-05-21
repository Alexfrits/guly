/*  Liste des astuces
===================================================================*/

hintsListControllers
.controller('HintsListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('app-data/hints.json')
    .success(function(data) {
      $scope.hints = data;
    });

    $scope.orderProp = 'age';
  }
])
.controller('HintDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.astuceId = $routeParams.astuceId;
  }
]);

/*  validation du form
===================================================================*/

formControllers
  .controller('FormCtrl', ['$scope',
    function($scope) {
      // $scope.master = {};
      // $scope.update = function(user) {
      //   $scope.master = angular.copy(user);
      // };
    }
  ]);

/*  switch button
===================================================================*/

switchControllers
  .controller('uiSwitchCtrl', function($scope) {
    $scope.notif = true;
    $scope.smart = true;

    $scope.changeCallback = function() {
      //$scope.enabled = false;
    };
  });
