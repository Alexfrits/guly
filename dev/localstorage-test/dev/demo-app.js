var gulyApp = window.angular.module('gulyApp', [
  'LocalStorageModule'
]);

gulyApp.config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('guly2');
  // localStorageServiceProvider.setStorageCookieDomain('example.com');
  // localStorageServiceProvider.setStorageType('sessionStorage');
})
.controller('storageCtrl',
  function($scope, localStorageService) {

    // récupéré au refresh
    $scope.nickname = localStorageService.get('nickname');
    $scope.lastname = localStorageService.get('lastname');

    // set et get function
    $scope.$watch('nickname', function(value){
      localStorageService.set('nickname',value);
      $scope.nicknameVal = localStorageService.get('nickname');
    });

    $scope.$watch('lastname', function(value){
      localStorageService.set('lastname',value);
      $scope.lastnameVal = localStorageService.get('lastname');
    });

    // $scope.storageType = 'Local storage';

    if (!localStorageService.isSupported) {
      $scope.storageType = 'Cookie';
    }

    // $scope.$watch(function(){
    //   return localStorageService.get('nickname');
    // }, function(value){
    //   $scope.nickname = value;
    // });
    // var guly = {};
    // guly = {
    //   'nickname' : "",
    //   'lastname' : ""
    // };
    // console.log(guly);    
  }
);
