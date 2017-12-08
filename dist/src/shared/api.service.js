'use strict';

module.exports = function (app) {
	app.factory('apiService', function ($http) {
		var apiPath = 'https://rest.bandsintown.com/';
		var app_id = '?app_id=itay_testing';

		var apiRequest = function apiRequest(options) {

			return $http(options).then(function (response) {
				return response.data;
			});
		};

		var getData = function getData(path) {
			return apiRequest({ method: 'GET', url: path + app_id });
		};

		var getArtists = function getArtists(artistname) {
			return getData(apiPath + 'artists/' + artistname);
		};

		var getEvents = function getEvents(artistname) {
			return getData(apiPath + 'artists/' + artistname + '/events');
		};
		return {
			getArtists: getArtists,
			getEvents: getEvents
		};
	});
};
//# sourceMappingURL=api.service.js.map