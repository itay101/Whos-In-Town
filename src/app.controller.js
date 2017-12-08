module.exports = function (app) {
	app.controller('appController',function ($scope,$state,$stateParams,apiService) {

		$scope.fetchArtists = function (artistname) {
			apiService.getArtists(artistname).then(function (data) {
				$scope.artist = data;
			});
			fetchEvents(artistname)
		}

		$scope.artistSearched = function (artistname) {
			$state.go('artist',{artistname:artistname})
		}

		let init = function () {
			if($stateParams.artistname) {
				$scope.fetchArtists($stateParams.artistname)
			}
		}
		let fetchEvents = function (artistname) {
			apiService.getEvents(artistname).then(function (data) {
				$scope.events = data;
			})
		}

		init()
	})
}