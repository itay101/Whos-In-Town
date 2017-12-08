module.exports = function (app) {
	app.directive('eventItem',function () {
		return {
			template:require('./event-item.directive.html'),
			replace:true,
			scope:{
				data:'='
			},
			controller:function ($scope,eventsService,$state) {
				$scope.gotToEventPage = function () {
					eventsService.setEvent($scope.data)
					$state.go('event')
				}
			}
		}
	})
}
