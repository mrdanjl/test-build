angular.module('Five.controllers', [])

.controller('FiveContentCtrl', function($scope, $ionicLoading, FiveService) {
  $scope.loading = $ionicLoading.show({
    content: 'Fetching your 5ive ...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 500
  });  
  
  FiveService.all(function(data) {
    $scope.stories = data.stories;
    $scope.loading.hide();
  });
  
  $scope.onRefresh = function() {
    
    FiveService.all(function(data) {
      $scope.stories = data.stories;
      $scope.loading.hide();
      $scope.$broadcast('scroll.refreshComplete');
    });
    
  } 

});
