/**
 * Created by PiwiZ on 02/11/2014.
 */

var app = angular.module('app', [ 'ngRoute','validationApp','cntrl2','custom','ngTable','main']).config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);
var body = document.getElementsByTagName('body')[0];

setTimeout(function() {
    body.setAttribute('ng-app', 'app');
    angular.bootstrap(body, ['ng', 'app']);
}, 4000);
app.config(function configure($routeProvider) {

    $routeProvider
        .when('/', { controller: 'CustomersController', templateUrl: './js/templates/customersnew.html' })
        .when('/customer/id/:id', { controller: 'CustController', templateUrl: './js/templates/singlecus.html' });
});

app.factory('Data', function Data($http) {

    return {
        getCustomers: function getCustomers() { return $http.get('/laravel/public/customer/all');},
            //$http.get('/laravel/public/customer/all')
         getTeacherClass: function getTeacherClass(id) { return $http.get('/laravel/public/teacherclass/'+ id); },
        getCustomer:  function getCustomer(id) { return $http.get('/laravel/public/customer/id/'+ id); },
        addCustomer: function addCustomer(data) { return $http.post('/laravel/public/customer/add', data); }} });
       // removeCustomer: function removeCustomer(id) { return $http.delete('/customers?id='+ id); },
       // getTransactions: function getTransactions(id) { return $http.get('/transactions?id='+ id); },
     //   addTransaction: function addTransaction(data) { return $http.post('/transactions', data); },
      //  removeTransaction: function removeTransaction(id) { return $http.delete('/transactions?id='+ id); } } });

var m = {
    "India": "2",
    "England": "2",
    "Brazil": "3",
    "UK": "1",
    "USA": "3",
    "Syria": "2"
};

function MyCtrl($scope) {
    $scope.items = m;
}

var body = document.getElementsByTagName('body')[0];

setTimeout(function() {
    body.setAttribute('ng-app', 'myApp');
    angular.bootstrap(body, ['ng', 'myApp']);
}, 1000);

