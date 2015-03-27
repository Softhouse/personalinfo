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
	    vm.me = {};
	    vm.save = save;

		$http.get('/employees/me').then(function(response) {
			vm.me = response.data;
		});

		function save(me) {
			vm.saving = true;
			$http.put('/employees/me', me).then(function(response) {
				vm.saving = false;
			},function(errorResponse) {
				$log.error(errorResponse);
				vm.saving = false;
			});
		}
	 }

})();
