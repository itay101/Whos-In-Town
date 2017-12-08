'use strict';

module.exports = function (app) {
	app.factory('eventsService', function () {
		var event = void 0;

		var setEvent = function setEvent(chosenEvent) {
			event = chosenEvent;
		};

		var getEvent = function getEvent() {
			return event;
		};
		return {
			setEvent: setEvent,
			getEvent: getEvent
		};
	});
};
//# sourceMappingURL=events.service.js.map