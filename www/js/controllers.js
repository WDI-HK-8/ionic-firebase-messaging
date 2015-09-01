angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope) {
  $scope.chats = [{
    id: 0,
    name: 'GA HK WDI 8',
    face: 'https://pbs.twimg.com/profile_images/616323696601468930/SkNd2ppU.png'
  }]
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $firebaseObject) {
  console.log($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
