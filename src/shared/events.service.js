module.exports = function (app) {
	app.factory('eventsService',function () {
		let event;

		let setEvent = function (chosenEvent) {
			event = chosenEvent
		}
		
		let getEvent = function () {
			return event
		}
		return {
			setEvent:setEvent,
			getEvent:getEvent
		}
	})
}