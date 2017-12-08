'use strict';

module.exports = function (app) {
	app.directive('eventsList', function () {
		return {
			template: require('./events-list.directive.html'),
			replace: true,
			scope: {
				events: '='
			},
			controller: function controller($scope, eventsService) {
				$scope.fields = ['Date', 'Venue', 'Location'];
			}
		};
	});
};
//# sourceMappingURL=events-list.directive.js.map