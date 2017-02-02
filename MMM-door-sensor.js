/* global Module */

/* Magic Mirror
 * Module: MMM-door-sensor
 *
 * By iStepgueu http://www.twitter.com/istepgueu
 * MIT Licensed.
 */

Module.register("MMM-door-sensor",{

	// Default module config.
	//defaults: {
	//	text: "Hello World!"
	//},


	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

	},



	notificationReceived: function(notification, payload, sender) {
		if (sender) {
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
			if (notification === "REMOTE_ACTION") {
				this.sendSocketNotification(notification, payload);	
			}
		} else { 
			if (notification === "DOM_OBJECTS_CREATED") {
				this.sendSocketNotification("REQUEST_DEFAULT_SETTINGS");
			}
		}
	},



	getDom: function() {
		var wrapper = document.createElement("div");

		if (notification === "SHOW_ALERT") {
                      wrapper.innerHTML = "TOTO";
		}

		} else {

                if (notification === "HIDE_ALERT") {
			wrapper.innerHTML = "TATA";
		}

		return wrapper;
	},




});
