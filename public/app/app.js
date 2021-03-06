angular.module('app', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main/main',
                controller: 'mvMainCtrl'
            })
    })
