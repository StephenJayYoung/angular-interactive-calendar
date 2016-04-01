var app = angular.module('CalendarApp', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'DayController', 
      templateUrl: 'js/views/day.html' 
    })
  .when('/:id', {
    controller: 'EventController' ,
    templateUrl: 'js/views/event.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});