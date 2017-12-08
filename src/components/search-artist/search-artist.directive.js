module.exports = function (app) {
	app.directive('searchArtist',function () {
		return {
			template:require('./search-artist.directive.html'),
			scope:{
				onSearch:'='
			},
			controller:function ($scope,$stateParams) {
				$scope.artistname = $stateParams.artistname || ''

				$scope.searchButtonClicked = function () {
					$scope.onSearch($scope.artistname)
				}
			}
		}
	})
}