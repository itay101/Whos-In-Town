'use strict';

module.exports = function (app) {
	app.directive('app', function () {
		return {
			template: require('./template/app.html'),
			controller: function controller($scope) {
				debugger;
			}
		};
	});
};
//# sourceMappingURL=app.directive.js.map