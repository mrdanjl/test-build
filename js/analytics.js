angular.module('Five.analytics', [])

.factory('FiveAnalytics', function() {
  return {
    send: function(event, data) {
      return Keen.addEvent(event, data);
    }
  }
});