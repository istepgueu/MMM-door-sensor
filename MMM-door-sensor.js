/* global Module */

/* Magic Mirror
 * Module: MMM-door-sensor
 *
 * By iStepgueu http://www.twitter.com/istepgueu
 * MIT Licensed.
 */

Module.register("MMM-door-sensor",{

	// Default module config.
	defaults: {
		text: "Hello World!"
	},


	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

	},



	notificationReceived: function(notification, payload, sender) {
		if (sender) {
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
			if (notification === "REMOTE_ACTION") {
				this.sendSocketNotification(notification, payload);	
			
			var wrapper = document.createElement("div");
                        wrapper.innerHTML = "TATA";
                        return wrapper;

			}
		} else { 
			if (notification === "DOM_OBJECTS_CREATED") {
				this.sendSocketNotification("REQUEST_DEFAULT_SETTINGS");
			
			var wrapper = document.createElement("div");
                        wrapper.innerHTML = "TOTO";
                        return wrapper;	

			}
		}


		

	},




});
