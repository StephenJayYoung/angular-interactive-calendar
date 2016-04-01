app.controller('EventController', ['$scope', 'events', '$routeParams', function($scope, events, $routeParams) {
  events.success(function(data) {
    $scope.day = data[$routeParams.id];
  });
}]);
