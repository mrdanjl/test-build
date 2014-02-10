angular.module('Five.analytics', [])

.factory('FiveAnalytics', function() {
  return {
    send: function(event, data) {
      if (typeof(data) == 'undefined') data = {};
      
      // append device details
      data.deviceModel    = device.model;
      data.devicePlatform = device.platform;
      data.deviceUuid     = device.uuid;
      
      return Keen.addEvent(event, data);
    }
  }
});