angular.module('Five.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('FiveService', function($http) {
  var service = 'http://5ive.newsfoundry.com.au/service/five.json';
 
  return {
    all: function(success, error) {
      return $http({method: 'GET', url: service}).success(success);
    }
  }
});
