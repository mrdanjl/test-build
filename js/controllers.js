angular.module('Five.controllers', [])

.controller('FiveContentCtrl', function($scope, $ionicLoading, $ionicScrollDelegate, FiveService, FiveAnalytics) {
  $scope.loading = $ionicLoading.show({
    content: 'Fetching your 5ive ...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 500
  });  
  
  $scope.progress = 0;
  
  $scope.onRefresh = function() {  
    FiveService.all(function(data) {
      $scope.nextUpdate = data.nextUpdate;
      $scope.stories    = data.stories;
      $scope.loading.hide();
      $scope.$broadcast('scroll.refreshComplete');
      FiveAnalytics.send('event', { event: 'refresh' }); 
    });
    
  };
  
  $scope.onScroll = function() {
    var buffer = 100;
    
    var sv        = $ionicScrollDelegate.getScrollView($scope);
    var scrollPos = sv.__scrollTop;
    var maxLength = sv.getScrollMax().top - buffer;
    
    $scope.progress = (scrollPos / maxLength) * 100;
    if(!$scope.$$phase) $scope.$apply();
  };
  
  $scope.initAnalytics     = function() {
    FiveAnalytics.send('event', { event: 'initialLoad' }); 
  }
  
  // initial load
  $scope.onRefresh();
  $scope.initAnalytics();
});