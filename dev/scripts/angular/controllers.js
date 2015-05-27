
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

    // initialise les boutons avec une valeur
    $scope.notif = (localStorageService.get('notif') !== null) ? localStorageService.get('notif') : true;
    $scope.sport = (localStorageService.get('sport') !== null) ? localStorageService.get('sport') : false;
    $scope.smart = (localStorageService.get('smart') !== null) ? localStorageService.get('smart') : false;

    // set et get function
    $scope.$watch('nickname', function(value) {

      localStorageService.set('nickname', value);
      $scope.nicknameVal = localStorageService.get('nickname');
    });

    $scope.$watch('weight', function(value) {
      localStorageService.set('weight', value);
      $scope.weightVal = localStorageService.get('weight');
    });

    $scope.$watch('notif', function(value) {
      localStorageService.set('notif', value);
      $scope.notifVal = localStorageService.get('notif');
    });

    $scope.$watch('sport', function(value) {
      localStorageService.set('sport', value);
      $scope.sportVal = localStorageService.get('sport');
    });

    $scope.$watch('smart', function(value) {
      localStorageService.set('smart', value);
      $scope.smartVal = localStorageService.get('smart');
    });

    if (!localStorageService.isSupported) {
      $scope.storageType = 'Cookie';
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

gulyApp.
controller('astucesCtrl', ['$scope', '$http',
  function($scope, $http) {
    // $http.get('app-data/astuces.json')
    //     .success(function(data) {
    //       $scope.astucesitems = data;
    //     });
    this.astuces = astuces;
  }
]);

// should be in a database...
var astuces = [
  {
    strong: "",
    astuce: "Si vous êtes assise dans une pièce avec de l’air conditionné la plupart de la journée, votre corps et votre peau vont être déshydratés. Vous devez boire plus d’eau et vous mettre de la crème hydratante."
  },
  {
    strong: "",
    astuce: "Vous aimez la compétition ? Défiez vos amis ou vos collègues et découvrez qui atteindra son quota en premier"
  },
    {
    strong: "",
    astuce: "Faites des eaux aromatisées en remplissant un pichet d’eau et en y ajoutant des rondelles de citron ou des feuilles de menthe. Dans certains endroits (Inde), on peut acheter des racines de vétiver (appelées 'kus') à rajouter à de l’eau pour avoir un arôme et un parfum délicieux. Mettez au réfrigérateur pendant 4 à 8 heures. Puis enlevez les fruits, ou herbes pour ne pas que l’arôme soit trop fort."
  },
  {
    strong: "",
    astuce: "Mettez l’eau au frais si vous la préférez ainsi. Gardez un pichet d’eau au réfrigérateur. Mettez des glaçons ou de l’eau gelée dans une petite bouteille avant de l’emmener avec vous, cela fondra et restera froid. L’eau froide demande de l’énergie à votre corps pour réguler sa température, ça lui fait donc brûler des calories. L’eau à température ambiante est meilleure si vous êtes déshydraté. Votre corps peut ainsi absorber l’eau immédiatement au lieu d’avoir à élever la température de l’eau d’abord pour pouvoir l’absorber."
  },
  {
    strong: "",
    astuce: "Le climat change drastiquement votre besoin en eau. Lorsqu’il fait chaud et que vous devez sortir, vous devez boire plus d’eau pour contrer celle que vous perdez à travers votre sueur. Cela gardera votre corps hydraté, mais aussi vous empêchera de souffrir d’un coup de chaud. Mais il est tout aussi important de boire suffisamment sous un climat froid et sec. Le corps humain marche beaucoup mieux quand il est bien hydraté. Une ration quotidienne d’eau insuffisante va d’abord affecter les fonctions cérébrales, ce qui peut s’avérer très dangereux."
  },
  {
    strong: "",
    astuce: "Une bonne idée est de consommer un verre d’eau avant chaque repas, car cela deviendra plus difficile d’oublier et contribuera à stimuler le métabolisme des repas."
  },
  {
    strong: "",
    astuce: "Les infusions, eaux gazeuses et soupes comptent dans le calcul de votre ration d’eau quotidienne."
  },
  {
    strong: "",
    astuce: "Si votre urine est très claire, vous buvez trop d’eau et vous perdez des électrolytes. Cependant si votre urine est foncée et/ou est très odorante, vous n’avez pas bu assez d’eau. Le juste milieu est une urine jaune clair, peu odorante"
  }
];

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
