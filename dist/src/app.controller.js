'use strict';

module.exports = function (app) {
	app.controller('appController', function ($scope, $state, $stateParams, apiService) {

		$scope.fetchArtists = function (artistname) {
			apiService.getArtists(artistname).then(function (data) {
				$scope.artist = data;
			});
			fetchEvents(artistname);
		};

		$scope.artistSearched = function (artistname) {
			$state.go('artist', { artistname: artistname });
		};

		var init = function init() {
			if ($stateParams.artistname) {
				$scope.fetchArtists($stateParams.artistname);
			}
		};
		var fetchEvents = function fetchEvents(artistname) {
			apiService.getEvents(artistname).then(function (data) {
				$scope.events = data;
			});
		};

		init();
	});
};
//# sourceMappingURL=app.controller.js.map