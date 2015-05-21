
/*  Liste des astuces
===================================================================*/
gulyApp
.controller('mainController', ['localStorageService',
  function($scope, localStorageService) {
  function submit(key, val) {
    return localStorageService.set(key, val);
  }

}]);

/*  liste des astuces
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

/*  Gooey Menu
===================================================================*/
gooeyMenuModule
.controller('gooeyMenuController', function($scope) {
  var $openButton = $('.gooey .gooey__open-button');

  $openButton.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
});

/*  Main Nav
===================================================================*/

mainNavModule
.controller('mainNavController', function($scope) {
  var $menuOpenButton = $('#main-nav__toggle-button');

  $menuOpenButton.on('click', function(e) {
    e.preventDefault();
    console.log('click');
  });

});
