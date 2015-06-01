
/*  Contrôleur principal
===================================================================*/

gulyApp
.controller('MainCtrl', ['$scope',

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

    // executes calculate the first time
    $scope.wnResult = wnCalc();

    // calculates the water need based on the weight
    function wnCalc($) {
      var weight =  parseInt($scope.weight);
      var indice = 38;
      // water you get eating food
      var aliments = (900 / 65) * weight;

      wnResult = (weight * indice) - aliments;
      return wnResult;
    }

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

      // recalculates the value of wnResult & stocks it on change;
      localStorageService.set('wnResult', wnCalc());
      $scope.wnResultVal = localStorageService.get('wnResult');
    });
  }
  ]);

/*  Calculer l'objectif (waterneed)
===================================================================*/

gulyApp.controller('wnCtrl', ['$scope', 'localStorageService',
      function($scope, localStorageService) {
        var weight =  parseInt($scope.weight);
        var constante = 38;
        var food = weight * (900 / 65); // the amount of water you get eating food
        // gets the to drink of the LS if it exists
        var toDrink = (localStorageService.get('wnToDrink')) ? localStorageService.get('wnToDrink') : false;

        $scope.wnResult = (weight * constante) - food;

        localStorageService.set('wnResult', $scope.wnResult);
        // if wnToDrink doesn't exists, sets it equal to the daily goal
        if (!toDrink) {
          localStorageService.set('wnToDrink', $scope.wnResult);
        }
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

gulyApp
.controller('astucesController', ['$scope', '$http',
    function($scope, $http) {
      $scope.test = 'test';
      console.log('test');
      // $scope.astuces = [];
      // $http.get('app-data/astuces.json')
      //   .success(function(data) {
      //     $scope.astuces = data;
      //     console.log($scope.astuces);
      //   })
      //   .error(function(resp) {
      //     console.log('attention, erreur: ' + resp);
      //   });
    }
  ]);

/*  liste des faq
===================================================================*/

gulyApp
  .controller('faqitemCtrl', ['$scope', '$http',
    function($scope, $http) {

      $scope.faqItems = [];

      $http.get('app-data/faq_items.json')
        .success(function(data) {
          $scope.faqItems = data;
        }).error(function(resp) {
          console.log('attention, erreur: ' + resp);
        });
    }
  ]);

/*  validation du form profil
===================================================================*/

gulyApp
.controller('profilformCtrl', ['$scope', 'localStorageService',
    function($scope, localStorageService) {
      this.profil = {};

      // initialise les boutons avec une valeur
      $scope.notif = (localStorageService.get('notif') !== null) ? localStorageService.get('notif') : true;
      $scope.smart = (localStorageService.get('smart') !== null) ? localStorageService.get('smart') : false;

      // validation du form
      $scope.submitForm = function(isValid) {
        // starts the logged session when form is validated
        if (isValid) {
          logged = true;
          console.log('formulaire envoyé');
          localStorageService.set('logged', logged);
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
  .controller('waterMeterController', [
    '$scope',
    '$element',
    '$window',
    'localStorageService',
    'deviceOrentationListener',
    function(
      $scope,
      $element,
      $window,
      localStorageService,
      deviceOrientationListener
    ) {

      /* INITIALISATION */

      var goal = localStorageService.get('wnResult');
      // get the value in the LS; if doesn't exists, sets it equal to the daily goal
      var toDrink = (localStorageService.get('wnToDrink') !== null) ? localStorageService.get('wnToDrink') : initToDrink(goal);
      var $waterLevelWrapper = $element.find('.water-meter__round-wrapper');
      $scope.wnToDrink = toDrink;
      var $waterLevel = $element.find('.water-meter__level');

      //if drinkSizes are in custom, they are in LS
      var drinkSize = (localStorageService.get('drinkSize')) ? JSON.parse(localStorageService.get('drinkSize')) : false;

      // if they aren't in LS, fallback to default
      $scope.drinkSize = {};
      $scope.drinkSize.small = (drinkSize.small) ? drinkSize.small : 125;
      $scope.drinkSize.med = (drinkSize.med) ? drinkSize.med : 250;
      $scope.drinkSize.large = (drinkSize.large) ? drinkSize.large : 330;

      function setWaterLevel (height) {
        $waterLevel.css('height', height + '%');
      }
      function initToDrink (quantity) {
        localStorageService.set('wnToDrink', quantity);
      }

      /* ACTIONS */

      $scope.updateToDrink = function(quantity) {
        // get the value in the localstorage
        toDrink = localStorageService.get('wnToDrink');
        var newToDrink = toDrink - quantity;

        if (newToDrink > 0) {
          newToDrink = newToDrink;
        }else {
          newToDrink = 0;
        }
        height = newToDrink / goal * 100;

        $scope.wnToDrink = newToDrink;
        setWaterLevel(height);
        localStorageService.set('wnToDrink', newToDrink);
      };

      /* ROTATION */
      var tiltLR;
      var tiltFB;
      var North;

      if ($window.DeviceOrientationEvent) {
        $window.addEventListener('deviceorientation', function(e) {
          tiltLR = Math.round(e.gamma * 100) / 100; //arrondi à 2 décimales
          $scope.tiltFB = e.beta;
          North = e.alpha;

          $waterLevelWrapper.attr('style', 'transform: rotate(' + tiltLR + ');');
        });
      }

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
    };
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
  .controller('chartController', ['$scope', '$http', 'localStorageService',
    function($scope, $http, localStorageService) {

      // getting today's date

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      today = mm + '/' + dd + '/' + yyyy;
      console.log(today);

      var testDatas = {
                        'labels': [
                        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'TEST', 'TEST', 'TEST'
                        ],
                        'datasets': [
                          {
                            'label': 'line chart dataset',
                            'fillColor': 'rgba(0, 0, 0, 0)',
                            'strokeColor': 'rgb(0, 119, 230)',
                            'pointColor': 'rgb(102, 229, 209)',
                            'pointStrokeColor': '#fff',
                            'pointHighlightFill': '#fff',
                            'pointHighlightStroke': 'rgba(220,220,220,1)',
                            'data': [81, 56, 55, 65, 59, 80, 40]
                          },
                          {
                            'label': 'line chart 2 dataset',
                            'fillColor': 'rgba(0, 0, 0, 0)',
                            'strokeColor': 'rgb(255, 20, 70)',
                            'pointColor': 'rgb(255, 119, 230)',
                            'pointStrokeColor': '#fff',
                            'pointHighlightFill': '#fff',
                            'pointHighlightStroke': 'rgba(220,220,220,1)',
                            'data': [23, 46, 75, 25, 89, 33, 12]
                          }
                        ]
                      };

      localStorageService.set('chartsData', JSON.stringify(testDatas));

      $scope.data = JSON.parse(localStorageService.get('chartsData'));

      // Options for the line graph
      $scope.options = {
        scaleShowGridLines : false,
        showScale: false,
        scaleBeginAtZero: true,
      };

    }
  ]);

gulyApp
  .controller('badgesCtrl', ['$scope', '$http',
    function($scope, $http) {

      $scope.badges = [];

      $http.get('app-data/badges.json')
        .success(function(data) {
          $scope.badges = data;
        }).error(function(resp) {
          console.log('attention, erreur: ' + resp);
        });
    }
  ]);
