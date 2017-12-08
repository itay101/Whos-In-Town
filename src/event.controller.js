module.exports = function (app) {
	app.controller('eventController', function ($scope, eventsService, $state) {

		$scope.addToFavorites = function () {
			window.localStorage['favorite-event-' + $scope.event.id] = JSON.stringify($scope.event)
			$scope.isFavorite                                 = true
		}

		$scope.removeFromFavorites = function () {
			delete window.localStorage['favorite-event-' + $scope.event.id]
			$scope.isFavorite = false

		}

		let checkIfFavorite        = function () {
			$scope.isFavorite = false

			if ('favorite-event-' + $scope.event.id in window.localStorage)
				$scope.isFavorite = true

		}
		let init                   = function () {
			$scope.event = eventsService.getEvent()

			if (!$scope.event)
				$state.go('artists')

			checkIfFavorite()
		}

		init()
	})
}