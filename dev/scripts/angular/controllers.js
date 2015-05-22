
/*  Contrôleur principal
===================================================================*/
gulyApp
.controller('storageCtrl', ['$scope', 'localStorageService',
  function($scope, localStorageService) {
    // definir model (variables)
    var nickname = $scope.nickname = localStorageService.get('nickname');

    // User informations
    var guly = $scope.guly = {};
    guly.user = {
      'nickname' : nickname,
      'weight' : $scope.weightVal,
      'wn' : $scope.wnVal
    };

    // écouter les changements et set in ls
    $scope.$watch('nickname', function(value) {
      localStorageService.set('nickname', value);
      $scope.nicknameVal = localStorageService.get('nickname');
    });

    // localStorage type
    $scope.storageType = 'Local storage';

    // if localStorage not supported
    if (!localStorageService.isSupported) {
      $scope.storageType = 'Cookie';
    }

    // renvoyer les data du localStorage
    $scope.$watch(function() {
      return localStorageService.get('nickname');
    }, function(value) {
      $scope.nickname = value;
    });

    console.log(guly.user);
    // function submit(guly, nicknameVal) {
    //   return localStorageService.set(guly, nicknameVal);
    // }
  }
  ]);

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
.controller('wnCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'wn';
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

/*  Water Meter
===================================================================*/

waterMeterModule
  .controller('waterMeterController', ['$scope',
    function($scope) {
      $scope.quantity = 2;
    }
  ]);

/*  Gooey Menu
===================================================================*/
gooeyMenuModule
  .controller('gooeyMenuController', ['$scope', '$element',
    function($scope, $element) {
      $scope.title = 'GOOEY!!';

      $element.on('click', function(e) {
        e.preventDefault();
      });
    }
  ]);

