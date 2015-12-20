
var countryApp = angular.module("countryApp",[]);

countryApp.controller('CountryCtrl',function($scope,$http){


$http({
  method: 'GET',
  url: 'https://restcountries.eu/rest/v1/all'
}).then(function successCallback(response) {
   // alert(response.data)
    //alert(JSON.stringify(response.data));
    $scope.countries = response.data;

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
countryApp.factory('CountryDB', function() {
  var shinyNewServiceInstance;
  // factory function body that constructs shinyNewServiceInstance
  return shinyNewServiceInstance;
});
