
/*  Contrôleur principal
===================================================================*/

gulyApp
.controller('MainCtrl', function() {

});

/*  Contrôleur LocalStorage
===================================================================*/

gulyApp.controller('storageCtrl', ['$scope', 'localStorageService',
  function($scope, localStorageService) {
    // récupéré au load()
    $scope.nickname = localStorageService.get('nickname');
    $scope.weight = localStorageService.get('weight');
    $scope.wnResult = localStorageService.get('wnResult');

    // initialise les boutons avec une valeur
    $scope.notif = (localStorageService.get('notif') !== null) ? localStorageService.get('notif') : true;
    $scope.sport = (localStorageService.get('sport') !== null) ? localStorageService.get('sport') : false;
    $scope.smart = (localStorageService.get('smart') !== null) ? localStorageService.get('smart') : false;

    // set et get function
    // $scope.$watch('nickname', function(value) {
    //   localStorageService.set('nickname', value);
    //   $scope.nicknameVal = localStorageService.get('nickname');
    // });

    // $scope.$watch('weight', function(value) {
    //   localStorageService.set('weight', value);
    //   $scope.weightVal = localStorageService.get('weight');
    // });

    // $scope.$watch('notif', function(value) {
    //   localStorageService.set('notif', value);
    //   $scope.notifVal = localStorageService.get('notif');
    // });

    // $scope.$watch('sport', function(value) {
    //   localStorageService.set('sport', value);
    //   $scope.sportVal = localStorageService.get('sport');
    // });

    // $scope.$watch('smart', function(value) {
    //   localStorageService.set('smart', value);
    //   $scope.smartVal = localStorageService.get('smart');
    // });

    $scope.$watch(function(value) {
      localStorageService.set('nickname', value.nickname);
      $scope.nicknameVal = localStorageService.get('nickname');

      localStorageService.set('weight', value.weight);
      $scope.weightVal = localStorageService.get('weight');

      localStorageService.set('notif', value.notif);
      $scope.notifVal = localStorageService.get('notif');

      localStorageService.set('smart', value.smart);
      $scope.smartVal = localStorageService.get('smart');

      localStorageService.set('wnResult', value.wnResult);
      $scope.wnResultVal = localStorageService.get('wnResult');
    });
  }
  ]);

/*  Calculer l'objectif (waterneed)
===================================================================*/

gulyApp.controller('wnCtrl', ['$scope',
      function($scope) {
        var a =  parseInt($scope.weight);
        var b = 0.038;

        $scope.wnResult = a * b;
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

gulyApp.
  controller('astucesCtrl', ['$scope', '$http',
    function($scope, $http) {
      $scope.astuces = [];

      $http.get('app-data/astuces.json')
        .success(function(data) {
          $scope.astuces = data;
        })
        .error(function(resp) {
          console.log('attention, erreur: ' + resp);
        });
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
.controller('profilformCtrl', ['$scope',
    function($scope) {
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
