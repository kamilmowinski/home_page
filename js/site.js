
var siteApp = angular.module('siteApp', [
    'ngRoute'
]);

siteApp.controller('AppController', function($scope, $http) {
    $http.get('pages.json').success(function (data) {
        $scope.pages = data;
    });
});


siteApp.controller('RouteController', function($scope, $routeParams) {
    var slug = $routeParams['slug'];
    $scope.page = $scope.pages[slug];
});


siteApp.config(function($routeProvider) {
    $routeProvider
        .when('/page/:slug', {
            templateUrl: 'partials/page.html',
            controller: 'RouteController'})
        .otherwise({redirectTo: '/page/home'});
});
