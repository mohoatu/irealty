 'use strict';

angular.module('irealtyApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-irealtyApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-irealtyApp-params')});
                }
                return response;
            }
        };
    });
