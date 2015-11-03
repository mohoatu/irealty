'use strict';

angular.module('irealtyApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


