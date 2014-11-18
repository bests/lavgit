<!DOCTYPE html>
<html ng-app="app">
<head>
    <title>Customer Management</title>

    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" />
	<style>
		@import url(//fonts.googleapis.com/css?family=Lato:700);

		body {
			margin:0;
			font-family:'Lato', sans-serif;
			text-align:center;
			color: #999;
		}

		.welcome {
			width: 300px;
			height: 200px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -150px;
			margin-top: -100px;
		}

		a, a:visited {
			text-decoration:none;
		}

		h1 {
			font-size: 32px;
			margin: 16px 0 0 0;
		}
	</style>
    <script src="http://code.angularjs.org/1.2.6/angular.js"></script>
    <script src="http://code.angularjs.org/1.2.6/angular-route.js"></script> <script src="js/Controllers/customer.js"></script>
    <script src="js/Controllers/formCon.js"></script> <script src="js/Controllers/cntrl.js"></script>


    <script src="js/app.js"></script> <!-- load our application -->

</head>
<body>


<ng-view></ng-view>




</body>
</html>
