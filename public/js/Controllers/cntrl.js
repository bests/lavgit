/**
 * Created by PiwiZ on 02/11/2014.
 */
angular.module('cntrl2', [])
.controller('CustomersController', function CustomersController($scope, Data) {
   // Data.getCustomers().success(parseCustomers);
   Data.getCustomers()
       .success(function(data) {
            $scope.customers = data;
           //$scope.loading = false;
       });
        $scope.setOrder = function (order) {
            $scope.order = order;
            $scope.addAlert = function() {
                $scope.alerts.push({msg: "Another alert!", show: true});
            };
        };

        $scope.newCustomer = { name: '', email: '' };

        $scope.addCustomer = function addCustomer() {
            var names = $scope.newCustomer.name.split(' ');

            Data.addCustomer({
                first_name: names[0],
               // last_name: names[1],
                email: $scope.newCustomer.email
            }).success(function(data) {

                // if successful, we'll need to refresh the comment list
                Data.getCustomers()
                    .success(function(data) {
                        $scope.customers = data;
                        $scope.newCustomer = { name: '', email: '' };
                        //$scope.loading = false;
                    });

            })
                .error(function(data) {
                    console.log(data);
                $scope.addAlert();
                });
        };
               // .success(customerAddSuccess)

        $scope.alerts = [
            { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.', show: false },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.', show: false }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: "Another alert!", show: true});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

              //  .error(customerAddError);
      //  }

        function customerAddSuccess(data) {
            $scope.error ='null';
          //  var names = $scope.newCustomer.name.split(' ');
            $scope.customers.push({


                email: $scope.newCustomer.email
            });
         //$scope.customers.push(names[0]);
            $scope.newCustomer = { name: 'test', email: 'test' };
        }

        function customerAddError(data) {
            $scope.error = data;
        }

        $scope.removeCustomer = function removeCustomer(id) {
            if (confirm('Do you really want to remove this customer?')) {
                Data.removeCustomer(id).success(customerRemoveSuccess);
            }
        }

        function customerRemoveSuccess(data) {
            var i = $scope.customers.length;
            while (i--) {
                if ($scope.customers[i].id == data) {
                    $scope.customers.splice(i, 1);
                }
            }
        }
    });