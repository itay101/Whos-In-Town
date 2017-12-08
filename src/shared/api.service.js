module.exports = function (app) {
	app.factory('apiService', function ($http) {
		const apiPath = 'https://rest.bandsintown.com/'
		const app_id  = '?app_id=itay_testing'

		let apiRequest = function (options) {

			return $http(options).then(function (response) {
				return response.data
			})
		}

		let getData = function (path) {
			return apiRequest({ method: 'GET', url: path + app_id })
		}

		let getArtists = function (artistname) {
			return getData(apiPath + 'artists/' + artistname)

		}

		let getEvents = function (artistname) {
			return getData(apiPath + 'artists/' + artistname + '/events')

		}
		return {
			getArtists: getArtists,
			getEvents : getEvents,
		}
	})
}