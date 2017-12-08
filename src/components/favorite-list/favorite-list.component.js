module.exports = function (app) {
	app.directive('favoriteList',function () {
		return{
			template:require('./favorite-list.component.html'),
			replace:true,
			controller:function ($scope,eventsService,$state) {
				$scope.favorites = []

				let collectFavorites = function () {
					for(let item in window.localStorage) {
						if(item.indexOf('favorite-event') > -1 ){
							$scope.favorites.push(JSON.parse(window.localStorage[item]))
						}
					}
				}
				let init = function () {
					collectFavorites();
				}
				$scope.eventSelected = function (event) {
					eventsService.setEvent(event);
					$state.go('event')
				}

				init()
			}
		}
	})
}