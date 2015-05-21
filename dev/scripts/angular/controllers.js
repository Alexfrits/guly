
/*  Contrôleur principal
===================================================================*/
gulyApp
.controller('mainController', ['localStorageService',
  function($scope, localStorageService) {
  function submit(key, val) {
    return localStorageService.set(key, val);
  }
}]);

/*  Contrôleurs de pages
===================================================================*/

pagesViewControllers
// adds a page-'pagename' class to the ng-view div
.controller('WaterTrackerCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'tracker';
  }
])
.controller('ProfileCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'profil';
  }
])
.controller('StatsCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'stats';
  }
])
.controller('HintsCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'hints';
  }
])
.controller('FaqCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'faq';
  }
])
.controller('ShopCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'shop';
  }
]);

/*  liste des astuces
===================================================================*/

// hintsListControllers
// .controller('HintsListCtrl', ['$scope', '$http',
//   function($scope, $http) {
//     $http.get('app-data/hints.json')
//     .success(function(data) {
//       $scope.hints = data;
//     });

//     $scope.orderProp = 'age';
//   }
// ])
// .controller('HintDetailCtrl', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     $scope.astuceId = $routeParams.astuceId;
//   }
// ]);

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
  .controller('gooeyMenuController', ['$scope', '$element',
    function($scope, $element) {

      $element.on('click', function(e) {
        e.preventDefault();
        console.log($scope);
      });
    }
  ]);

/*  Main Nav
===================================================================*/

mainNavModule
  .controller('mainNavController', function() {
    var $menuOpenButton = $('#main-nav__toggle-button');

    $menuOpenButton.on('click', function(e) {
      e.preventDefault();
    });

  });
