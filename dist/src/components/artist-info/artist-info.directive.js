'use strict';

module.exports = function (app) {
	app.directive('artistInfo', function () {
		return {
			template: require('./artist-info.directive.html'),
			scope: {
				info: '='
			},
			controller: function controller($scope) {}
		};
	});
};
//# sourceMappingURL=artist-info.directive.js.map