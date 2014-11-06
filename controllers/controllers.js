angular.module('raysapp.controllers', [])
.controller('RaysController', function ($scope, $http, $interval) {
    $scope.name = 'Ray Hengst';
    $http.get('http://uitr.herokuapp.com/countries').success(function (data) {
        $scope.hashmap = {};
        data.forEach(function (country) {
            $scope.hashmap[country.alpha3Code] = country.name;
        });
        console.log($scope.hashmap);
        $scope.data = data;
        // console.log(data);
    });
})