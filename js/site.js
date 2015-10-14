
var siteApp = angular.module('siteApp', [
    'ngRoute',
    'ngSanitize'
]);

siteApp.controller('AppController', function($scope, $http) {
    $http.get('json/news.json').success(function(data) {
        $scope.news = data;
    });
    $http.get('json/informations.json').success(function(data) {
        $scope.informations = data;
    });
});


siteApp.controller('RouteController', function($scope, $route, $http, $routeParams) {
  $scope.$route = $route;
});

siteApp.controller('PublicationController', function($scope, $http, $routeParams) {
    $http.get('json/publications.json').success(function(data) {
      $scope.publications = data;
    });
});

siteApp.controller('StudentController', function($scope, $http) {
  $http.get('json/tasks.json').success(function(data) {
    $scope.tasks = data;
  });
  $scope.sortTasks = function(task) {
    str = task.end.split('-')
    var date = new Date(str[2], str[1], str[0]);
    return date;
  };
})

siteApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'RouteController',
            activeTab: 'home'})
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'RouteController',
            activeTab: 'about'})
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'RouteController',
            activeTab: 'contact'})
        .when('/publications', {
            templateUrl: 'partials/publications.html',
            controller: 'PublicationController',
            activeTab: 'publications'})
        .when('/students', {
            templateUrl: 'partials/students.html',
            controller: 'StudentController',
            activeTab: 'students'})
        .otherwise({redirectTo: '/'});
});
