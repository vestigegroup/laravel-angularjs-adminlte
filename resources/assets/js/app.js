var app = angular.module('app', [
    'ngRoute', 'ngAnimate', 'ngSanitize', 'ngMessages',
    'app.controllers', 'app.services', 'app.filters', 'app.directives',
    'angularUtils.directives.dirPagination', 'angular-oauth2', 'angular-loading-bar',

    'mgcrea.ngStrap.navbar', 'mgcrea.ngStrap.dropdown'
]);

angular.module('app.controllers', []);
angular.module('app.filters', []);
angular.module('app.directives', []);
angular.module('app.services', ['ngResource']);


app.provider('appConfig', [function () {
    var config = {
        baseUrl: 'http://localhost:8000'
    };

    return {
        config: config,
        $get: function () {
            return config;
        }
    };
}]);

app.config([
    '$routeProvider',
    'appConfigProvider',
    function ($routeProvider, appConfigProvider) {

        $routeProvider
            .when('/', {
                templateUrl: appConfigProvider.config.baseUrl + "/build/views/home.html"
            })
            .when('/login', {
                templateUrl: appConfigProvider.config.baseUrl + "/build/views/login.html"
            })
            .otherwise({
                resolve: ['$location', function ($location) {
                    $location.path('/');
                }]
            });
    }
]);

app.run([
    '$rootScope', '$cookies', 'appConfig', '$dictionary',
    function ($rootScope, $cookies, appConfig, $dictionary) {

        $rootScope.dict = $dictionary.updateDictionaries().lang;
        $rootScope.user = $cookies.getObject('user');

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route && current.$$route.title) {
                $rootScope.pageTitle = current.$$route.title;
            } else {
                $rootScope.pageTitle = $rootScope.dict('APP_TITLE');
            }
        });
    }
]);
