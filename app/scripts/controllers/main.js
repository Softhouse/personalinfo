(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name shSpringMeetingAngularApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the shSpringMeetingAngularApp
	 */
	angular.module('shSpringMeetingAngularApp')
	  .controller('MainCtrl', mainCtrl);

	function mainCtrl($scope, $log, $http) {
		var vm = this;
	    vm.awesomeThings     = [];
	    vm.addAwesomeThing   = addAwesomeThing;
	    vm.removeAwesomeThing = removeAwesomeThing;

		$http.get('/api/awesomeThing').then(function(response) {
			vm.awesomeThings = response.data;
		});

		function addAwesomeThing(awesomeThing) {
			vm.loading = true;
			$http.post('/api/awesomeThing', awesomeThing).then(function(response) {
				vm.awesomeThings.push(response.data);
				vm.loading = false;
				angular.copy({}, awesomeThing);
			},function(errorResponse) {
				$log.error(errorResponse);
				vm.loading = false;
			});
		}

		function removeAwesomeThing(awesomeThing) {
			$http.delete('/api/awesomeThing/' + awesomeThing._id).then(function(response) {
				var pos = vm.awesomeThings.indexOf(awesomeThing);
				if(pos > -1) {
					vm.awesomeThings.splice(pos, 1);
				}
			},function(errorResponse) {
				$log.error(errorResponse);				
			});
		}
	 }

})();
