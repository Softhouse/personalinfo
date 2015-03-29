(function () {

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

	function mainCtrl($log, $http) {
		var vm = this;
	    vm.me = undefined;
	    vm.save = save;
	    vm.errors = [];

		$http.get('/employees/me').then(function(response) {
			vm.me = response.data;
		},function(errorResponse) {
			vm.errors.push({ message: errorResponse.statusText })			
		});

		function save() {
			vm.saving = true;
			$http.put('/employees/me', vm.me).then(function(response) {
				vm.saving = false;
			},function(errorResponse) {
				$log.error(errorResponse);
				vm.saving = false;
				vm.errors.push({ message: errorResponse.statusText })
			});
		}
	 }

})();
