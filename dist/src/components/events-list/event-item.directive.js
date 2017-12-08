'use strict';

module.exports = function (app) {
	app.directive('eventItem', function () {
		return {
			template: require('./event-item.directive.html'),
			replace: true,
			scope: {
				data: '='
			},
			controller: function controller($scope, eventsService, $state) {
				$scope.gotToEventPage = function () {
					eventsService.setEvent($scope.data);
					$state.go('event');
				};
			}
		};
	});
};
//# sourceMappingURL=event-item.directive.js.map