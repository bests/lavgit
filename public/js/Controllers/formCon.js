// create angular app
//var app2 = angular.module('validationApp', []);
angular.module('validationApp', [])
    //.controller('CustomersController', function ($scope) {
// create angular controller
.controller('mainController', function($scope) {

    // function to submit the form after all validation has occurred
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
           // alert('our form is amazing');
        }

       };

});
