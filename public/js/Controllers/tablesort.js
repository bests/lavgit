angular.module('main', ['angular-loading-bar','ngAnimate']).config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
})
    .controller('DemoController', function($scope,$filter,ngTableParams,Data,$timeout, cfpLoadingBar,$http) {
        $scope.datasets = [{name : "English",id:2},{name : "Math",id:1}];
      //  $scope.dataset =  $scope.datasets[0];
        $scope.load =  "Seleciona";


        $scope.posts = [];
        $scope.section = null;
        $scope.subreddit = null;
        $scope.subreddits = ['cats', 'pics', 'funny', 'gaming', 'AdviceAnimals', 'aww'];

        var getRandomSubreddit = function() {
            var sub = $scope.subreddits[Math.floor(Math.random() * $scope.subreddits.length)];

            // ensure we get a new subreddit each time.
            if (sub == $scope.subreddit) {
                return getRandomSubreddit();
            }

            return sub;
        };

        $scope.fetch = function() {
            $scope.subreddit = getRandomSubreddit();
            $http.jsonp('/laravel/public/curl').success(function(data) {
                $scope.posts = data.data.children;
            });
        };

        $scope.start = function() {
            cfpLoadingBar.start();
        };

        $scope.complete = function () {
            cfpLoadingBar.complete();
        }

        // fake the initial load so first time users can see it right away:

        $scope.start();
        $scope.fakeIntro = true;
        $timeout(function() {
            $scope.complete();
            $scope.fakeIntro = false;
        }, 750);



        Data.getTeacherClass(2)
            .success(function(data)
            {
                $scope.load =  "Ingles";
                nowContinue(data);

            })
            .error(function(error)
            {
                $scope.load =  "Error";
            });



        $scope.now = function(setid,setname) {
//alert(setid);
//var clase = $scope.dataset.id;

            $scope.load =  "loading....";

            Data.getTeacherClass(setid)
                .success(function(data)
                {
                    $scope.load =  setname;
                    nowContinue(data);

                })
                .error(function(error)
                {
                    $scope.load =  "Error";
                });





}








        function nowContinue(data) {
            // continue what ever it was that you wanted to do using the newly populated information
          //  $scope.tableParams.reload();

            var getData = function() {
              //  return $scope.dataset === "petar" ? data1 : data2;
            };
            $scope.$watch("dataset", function () {
                $scope.tableParams.reload();
            });

           // $scope.tableParams.reload();
            $scope.items = "first_name" ? $filter('filter')(data, ""):data;


            $scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10,
                filter: {
                    first_name: ''       // initial filter
                },
                sorting: {
                    first_name: 'asc'     // initial sorting
                }      // count per page
            }, {


                total: data.length, // length of data



                total: data.length, // length of data
                getData: function($defer, params) {





                    // use build-in angular filter
                    var filteredData = params.filter() ?
                        $filter('filter')(data, params.filter()) :
                        data;
                    var orderedData = params.sorting() ?
                        $filter('orderBy')(filteredData, params.orderBy()) :
                        data;

                    params.total(orderedData.length); // set total for recalc pagination
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });

            }










    });

