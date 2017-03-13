(function() {
	"use strict";

	angular.module('app.settings', ['ui.router'])

	/* Route
	/*------------------------------------------------*/

	.config(['$stateProvider', function($stateProvider) {
		// Parent state
		$stateProvider.state('default.settings', {
			url: '/settings',
			views: {
				"main@default": {
					templateUrl: './views/settings/settings.html',
					controller: ViewCtrl,
					controllerAs: 'vm'
				}
			},
			data: {
				title: 'Superstor | settings',
				scrollable: true
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

			vm.page = 0;
			vm.rows = [
				{name: 'Piim', price: 1.99, date: '01.01.2017 12:55', store: 'Kesklinna kauplus'},
				{name: 'Sai', price: 2, date: '01.01.2017 12:55', store: 'Ülemiste kauplus'},
				{name: 'Leib', price: 3, date: '01.01.2017 12:55', store: 'Lasnamäe kauplus'},
				{name: 'Õlu', price: 4, date: '01.01.2017 12:55', store: 'Nõmme pood'},
				{name: 'Vein', price: 3.25, date: '01.01.2017 12:55', store: 'Mustamäe kauplus'},
				{name: 'Vesi', price: 1.99, date: '01.01.2017 12:55', store: 'Kesklinna kauplus'},
				{name: 'Sai', price: 2, date: '01.01.2017 12:55', store: 'Ülemiste kauplus'},
				{name: 'Sepik', price: 5, date: '01.01.2017 12:55', store: 'Lasnamäe kauplus'},
				{name: 'Jahu', price: 1.8, date: '01.01.2017 12:55', store: 'Lasnamäe kauplus'},
				{name: 'Hakkliha', price: 3.25, date: '01.01.2017 12:55', store: 'Mustamäe kauplus'},
				{name: 'Keefir', price: 1.99, date: '01.01.2017 12:55', store: 'Nõmme pood'},
				{name: 'Sibul', price: 2, date: '01.01.2017 12:55', store: 'Ülemiste kauplus'},
				{name: 'Riis', price: 2.3, date: '01.01.2017 12:55', store: 'Lasnamäe kauplus'},
				{name: 'Tatar', price: 1.65, date: '01.01.2017 12:55', store: 'Nõmme pood'},
				{name: 'Tangud', price: 2.25, date: '01.01.2017 12:55', store: 'Mustamäe kauplus'}
			];
		};

		// Controller on destroy
		this.$onDestroy = function() {
			// Unbind rootscope listeners
		};
	}

})();