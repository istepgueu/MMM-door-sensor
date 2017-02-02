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

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
