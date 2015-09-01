angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope) {
  $scope.chats = [{
    id: 0,
    name: 'GA HK WDI 8',
    face: 'https://pbs.twimg.com/profile_images/616323696601468930/SkNd2ppU.png'
  }]
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $firebaseArray, $ionicScrollDelegate, $window) {
  var user = $window.localStorage.getItem('currentName')

  var ref = new Firebase("https://glowing-fire-2513.firebaseio.com/messages");

  $scope.messages = $firebaseArray(ref);

  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessage,
      user: user ? user : "Anonymous"
    });

    $scope.newMessage = "";
  };

  $scope.$watch('messages', function() { 
    $ionicScrollDelegate.scrollBottom();
  }, true);
})

.controller('AccountCtrl', function($scope, $window, $ionicPopup) {
  $scope.form = {};  
  $scope.form.currentName = $window.localStorage.getItem('currentName');

  $scope.form.setCurrentName = function() {
    $window.localStorage.setItem('currentName', $scope.form.currentName);

    $ionicPopup.alert({
     title: 'Name is set',
     template: $scope.form.currentName
   });
  };
});
