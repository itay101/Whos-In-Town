module.exports = function (app) {
	app.directive('artistInfo',function () {
			return {
				template:require('./artist-info.directive.html'),
				scope:{
					info:'='
				},
				controller:function ($scope) {

				}
			}
	})
}