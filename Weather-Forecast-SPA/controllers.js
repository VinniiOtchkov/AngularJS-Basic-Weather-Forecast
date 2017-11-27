// CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService', function($scope,cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    })

}]);

weatherApp.controller('forecastController', ['$scope','$resource','$routeParams', 'cityService', function($scope,$resource,$routeParams,cityService) {
    $scope.city = cityService.city;

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/weather?q=Arizona,us&APPID=5fe4dff9ab78c80ad2376e2c904e806f',
    {
     get: {
         method: "JSONP"
     }
 }
)


    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city});

    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK-273)) +32);
    }

    $scope.convertToDate = function() {
        return new Date();
    }

    $scope.days = $routeParams.days

}]);
