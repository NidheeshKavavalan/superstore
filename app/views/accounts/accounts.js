(function() {
	"use strict";

	angular.module('app.accounts', ['ui.router'])

	/* Route
	/*------------------------------------------------*/

	.config(['$stateProvider', function($stateProvider) {
		// Parent state
		$stateProvider.state('default.accounts', {
			url: '/accounts',
			views: {
				"main@default": {
					templateUrl: '../views/accounts/accounts.html',
					controller: ViewCtrl,
					controllerAs: 'vm'
				}
			},
			data: {
				title: 'Superstor | Accounts'
			}
		});

	}]);

	// Inject
	ViewCtrl.$inject = ['$scope'];

	// Controller for navigation component
	function ViewCtrl($scope) {
		var vm;

		// Controller on init
		this.$onInit = function() {
			vm = this;

			vm.rows = [
				{id: '123', name: 'Lisatud nimi 1'},
				{id: '321', name: 'Lisatud nimi 2'}
			];

			vm.add = add;
		};

		// Controller on destroy
		this.$onDestroy = function() {
			// Unbind rootscope listeners
		};


		// Functions

		/**
		 *	Function that adds to a table
		 */
		function add() {
			vm.rows.push({
				id: vm.id,
				name: vm.name
			});
			vm.id = undefined;
			vm.name = undefined;
		}
	}

})();