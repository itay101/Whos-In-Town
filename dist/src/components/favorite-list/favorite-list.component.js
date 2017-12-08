'use strict';

module.exports = function (app) {
	app.directive('favoriteList', function () {
		return {
			template: require('./favorite-list.component.html'),
			replace: true,
			controller: function controller($scope, eventsService, $state) {
				$scope.favorites = [];

				var collectFavorites = function collectFavorites() {
					for (var item in window.localStorage) {
						if (item.indexOf('favorite-event') > -1) {
							$scope.favorites.push(JSON.parse(window.localStorage[item]));
						}
					}
				};
				var init = function init() {
					collectFavorites();
				};
				$scope.eventSelected = function (event) {
					eventsService.setEvent(event);
					$state.go('event');
				};

				init();
			}
		};
	});
};
//# sourceMappingURL=favorite-list.component.js.map