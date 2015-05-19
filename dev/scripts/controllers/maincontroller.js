var gulyApp = angular.module('gulyApp', []);

gulyApp.controller('HintsListCtrl', function($scope) {
  $scope.hints = [
    {
      'title': 'Boire c’est bien',
      'content' : 'Boire de l’eau c’est bon pour la santé!'
    },
   {
      'title': 'Buvez Plus!',
      'content' : 'Si vous buvez beaucoup d’eau, vous serez en bonne santé'
    },
  ];
});
