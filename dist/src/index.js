'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.app = undefined;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./../css/bootstrap.min.css');
require('./../css/main.scss');
require('angular-ui-router');
require('ngmap');

var app = exports.app = _angular2.default.module('app', ['ui.router', 'ngMap']);

require('./shared/api.service')(app);
require('./shared/events.service')(app);
require('./app.controller')(app);
require('./event.controller')(app);
require('./components/search-artist/search-artist.directive')(app);
require('./components/artist-info/artist-info.directive')(app);
require('./components/events-list/events-list.directive')(app);
require('./components/events-list/event-item.directive')(app);
require('./components/favorite-list/favorite-list.component')(app);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/artists");

	$stateProvider.state('artists', {
		url: "/artists",
		template: require("./template/app.html"),
		controller: 'appController'
	}).state('artist', {
		url: "/artists/:artistname",
		template: require("./template/app.html"),
		controller: 'appController'
	}).state('event', {
		url: "/event/:eventData",
		template: require("./template/event.html"),
		controller: 'eventController'
	});
});
//# sourceMappingURL=index.js.map