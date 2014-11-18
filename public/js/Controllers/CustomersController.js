/**
 * Created by PiwiZ on 02/11/2014.
 */

app.controller('CustomersController', function CustomersController($scope, Data) {
    Data.getCustomers().success(parseCustomers);

    function parseCustomers(data) {
        $scope.customers = data;
    }

    $scope.newCustomer = { name: '', email: '' };

    $scope.addCustomer = function addCustomer() {
        var names = $scope.newCustomer.name.split(' ');
        Data.addCustomer({
            first_name: names[0],
            last_name: names[1],
            email: $scope.newCustomer.email
        })
            .success(customerAddSuccess).error(customerAddError);
    }

    function customerAddSuccess(data) {
        $scope.error = null;
        $scope.customers.push(data);
        $scope.newCustomer = { name: '', email: '' };
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