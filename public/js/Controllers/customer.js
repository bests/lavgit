/**
 * Created by PiwiZ on 02/11/2014.
 */
angular.module('custom', [])
    .controller('CustController', function CustomerController($scope, $routeParams, Data) {
        Data.getCustomer($routeParams.id).success(parseCustomer);

        function parseCustomer(data) {
            $scope.customer = data;


        }


        $scope.checkcustomer = function checkcustomer() {
          //  var names = $scope.newCustomer.name.split(' ');

            Data.getCustomer($routeParams.id).success(parseCustomer);

            function parseCustomer(data) {
                $scope.customer = data;


            }
        };

        function customerAddSuccess(data) {
            $scope.error ='null';
            //  var names = $scope.newCustomer.name.split(' ');
            $scope.customers.push({


                email: $scope.newCustomer.email
            });
            //$scope.customers.push(names[0]);
            $scope.newCustomer = { name: 'test', email: 'test' };
        }




    });