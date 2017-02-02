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

				var door_state = "close.png";			
	
				this.updateDom();				
			
			}
		} else { 
			if (notification === "DOM_OBJECTS_CREATED") {
				this.sendSocketNotification("REQUEST_DEFAULT_SETTINGS");
			
				var door_state = "open.png";


				this.updateDom();


			}
		}
		
		},


		getDom: function() {

		var wrapper = document.createElement("div");
		return door_state;
		wrapper.innerHTML = '<img id="door_state" src=' + door_state + ' width="100" height="200" />';
		return wrapper;
	}



});
