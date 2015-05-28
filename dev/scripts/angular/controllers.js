
/*  Contrôleur principal
===================================================================*/

gulyApp
.controller('MainCtrl', ['$scope',
  // function($scope) {
  //   $scope.nickname == null && $scope.weight == null;
  //   $window.location.href = '../partials/profil.html';
  // }
]);

/*  Contrôleur LocalStorage
===================================================================*/

gulyApp.controller('storageCtrl', ['$scope', 'localStorageService',
  function($scope, localStorageService) {
    // récupéré au load()
    $scope.nickname = localStorageService.get('nickname');
    $scope.weight = localStorageService.get('weight');

    // initialise les boutons avec une valeur
    $scope.notif = (localStorageService.get('notif') !== null) ? localStorageService.get('notif') : true;
    $scope.sport = (localStorageService.get('sport') !== null) ? localStorageService.get('sport') : false;
    $scope.smart = (localStorageService.get('smart') !== null) ? localStorageService.get('smart') : false;

    // Watch, set & get value
    $scope.$watch(function(value) {
      localStorageService.set('nickname', value.nickname);
      $scope.nicknameVal = localStorageService.get('nickname');

      localStorageService.set('weight', value.weight);
      $scope.weightVal = localStorageService.get('weight');

      localStorageService.set('notif', value.notif);
      $scope.notifVal = localStorageService.get('notif');

      localStorageService.set('smart', value.smart);
      $scope.smartVal = localStorageService.get('smart');
    });  
  }
  ]);

/*  Calculer l'objectif (waterneed)
===================================================================*/

gulyApp.controller('wnCtrl', ['$scope',
      function($scope) {
        var a =  parseInt($scope.weight);
        var b = 0.038;
        var c = 0.9;

        $scope.wnResult = (a * b) - c;
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
    $scope.pageClass = 'water-need';
  }
])
.controller('StatsCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'stats';
  }
])
// .controller('HintsCtrl', ['$scope',
//   function($scope) {
//     $scope.pageClass = 'hints';
//   }
// ])
.controller('AstucesCtrl', ['$scope',
  function($scope) {
    $scope.pageClass = 'astuces';
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

gulyApp.
controller('astucesCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.astuces = [];

    $http.get('app-data/astuces.json')
      .success(function(data) {
        $scope.astuces = data;
      }).error(function(resp) {

      });
  }
]);


/*  liste des faq
===================================================================*/

gulyApp.
controller('faqitemCtrl', ['$scope', '$http',
  function($scope, $http) {

    $scope.faqItems = [];

    $http.get('app-data/faq_items.json')
      .success(function(data) {
        $scope.faqItems = data;
      }).error(function(resp) {

      });
  }
]);

/*  validation du form profil @
===================================================================*/

gulyApp
.controller('profilformCtrl', ['$scope',
    function($scope) {
      $scope.test = 'ceci est un test';
      this.profil = {};

      $scope.submitForm = function(isValid) {
        if (isValid) {
          console.log('formulaire envoyé');
        }
      };
    }
]);

gulyApp
.controller('contactformCtrl', function($scope) {
  this.contact = {};
  $scope.submitForm = function(isValid) {
    if (isValid) {
      console.log('formulaire envoyé');
    }
  };
});


/*  Water Meter
===================================================================*/

waterMeterModule
  .controller('waterMeterController', ['$scope',
    function($scope) {
      $scope.quantity = 2;
      $scope.unit = 'l';
    }
  ]);

/*  Gooey Menu
===================================================================*/
gooeyMenuModule
  .controller('gooeyMenuController', ['$scope', '$element', '$rootScope',
    function($scope, $element, $rootScope) {
      $scope.title = 'GOOEY!!';
      var openButton = $element.find('.gooey__open-button');

      openButton.on('click', function(e) {
        e.preventDefault();
        console.log('click');
      });
    }
  ]);

/*  Weather Api
===================================================================*/

weatherControllers.controller("GetWeatherCtrl", ['$scope', 'weatherApi',
  function($scope, weatherApi) {
    $scope.currentTime = moment().format('h:mm a');

    weatherApi.getLocation().then(function(res) {

      weatherApi.getWeeklyWeather(res.data.city + "," + res.data.country_code).then(function(response) {
        $scope.data = response.data;
        if ($scope.data.list.length) {
          $scope.data.list.forEach(function(i, v) {
            var date = moment(i.dt * 1000);
            i.dt = {
              day: date.format("ddd")
            };
            if (moment().format("d") == date.format("d")) {
              i.dt.today = true;
            }
          });
        }
      });
    });
  }
]);

weatherServices.factory('weatherApi', ['myHttp',
  function(myHttp) {
    return {
      getLocation: function() {
        return myHttp.jsonp("http://muslimsalat.com/daily.json?callback=JSON_CALLBACK");
      },
      getWeeklyWeather: function(city) {
        return myHttp.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric');
      }
    }
  }
]);

weatherServices.factory('myHttp', ['$http', 'myCache',
  function($http, myCache) {

    var headers = {
      'cache': myCache,
      'dataType': 'json'
    };
    var APPID = "2f105d521c5bb6af5e35da3eb53ce954";
    return {
      config: headers,
      get: function(url, success, fail) {
        return $http.get(url + "&APPID=" + APPID, this.config);
      },
      getLocal: function(url, success, fail) {
        return $http.get(url);
      },
      jsonp: function(url, success, fail) {
        return $http.jsonp(url, this.config);
      }
    };
  }
]);

weatherServices.factory('myCache', function($cacheFactory) {
  return $cacheFactory('myCache', {
    capacity: 100
  });
});

function JSON_CALLBACK() {
  // Nothing
}


/*  Graphe
===================================================================*/

gulyApp
  .controller('chartController', ['$scope', '$http',
    function($scope, $http) {
      // for the line graph

      $scope.data = {
        labels: [
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'January', 'February', 'March', 'April', 'May', 'June', 'July',
                'January', 'February', 'March', 'April', 'May', 'June', 'July'
                ],
        datasets: [
          {
            label: 'line chart dataset',
            fillColor: 'rgba(0, 0, 0, 0)',
            strokeColor: 'rgb(0, 119, 230)',
            pointColor: 'rgb(102, 229, 209)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [
                    81, 56, 55, 65, 59, 80, 40,
                    65, 59, 59, 80, 55, 40, 65,
                    59, 40, 81, 56, 55, 40, 65,
                    80, 81, 56, 55, 80, 81, 56
                  ]
          }
        ]
      };

      // Options for the line graph
      $scope.options = {
        scaleShowGridLines : false,
        showScale: false,
        scaleBeginAtZero: true,
      };

    }
  ]);
