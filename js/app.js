var app = angular.module('CalendarApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'DayController', 
      templateUrl: 'js/views/day.html' 
    })
  .when('/night', {
    controller: 'DayController' ,
    templateUrl: 'views/day.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});