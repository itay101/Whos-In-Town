'use strict';

module.exports = function (app) {
	app.controller('eventController', function ($scope, eventsService, $state) {

		$scope.addToFavorites = function () {
			window.localStorage['favorite-event-' + $scope.event.id] = JSON.stringify($scope.event);
			$scope.isFavorite = true;
		};

		$scope.removeFromFavorites = function () {
			delete window.localStorage['favorite-event-' + $scope.event.id];
			$scope.isFavorite = false;
		};

		var checkIfFavorite = function checkIfFavorite() {
			$scope.isFavorite = false;

			if ('favorite-event-' + $scope.event.id in window.localStorage) $scope.isFavorite = true;
		};
		var init = function init() {
			$scope.event = eventsService.getEvent();

			if (!$scope.event) $state.go('artists');

			checkIfFavorite();
		};

		init();
	});
};
//# sourceMappingURL=event.controller.js.map