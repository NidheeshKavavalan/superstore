(function() {
	"use strict";

	angular.module('app.history', ['ui.router'])

	/* Route
	/*------------------------------------------------*/

	.config(['$stateProvider', function($stateProvider) {
		// Parent state
		$stateProvider.state('default.history', {
			url: '/history',
			views: {
				"main@default": {
					templateUrl: '../views/history/history.html',
					controller: ViewCtrl,
					controllerAs: 'vm'
				}
			},
			data: {
				title: 'Superstore | history'
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
				{name: 'Piim', price: 1.99, date: '01.01.2017 12:55', store: 'Kesklinna kauplus'},
				{name: 'Sai', price: 2, date: '01.01.2017 12:55', store: 'Ülemiste kauplus'},
				{name: 'Leib', price: 3, date: '01.01.2017 12:55', store: 'Lasnamäe kauplus'},
				{name: 'Õlu', price: 4, date: '01.01.2017 12:55', store: 'Nõmme pood'}
			];
		};

		// Controller on destroy
		this.$onDestroy = function() {
			// Unbind rootscope listeners
		};

	}

})();