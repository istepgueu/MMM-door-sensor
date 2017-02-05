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


			if (notification === "DOOR_CLOSE_avant") {
						this.door_state = "door_close.png";
                                		 this.updateDom();   						 

			} else if (notification === "DOOR_OPEN_avant") {
						this.door_state = "door_1_open.png";
                                		 this.updateDom();

			} else {
			}


			if (notification === "DOOR_CLOSE_arriere") {
                                                this.door_state2 = "door_close.png";
                                                 this.updateDom();

                        } else if (notification === "DOOR_OPEN_arriere") {
                                                this.door_state2 = "door_2_open.png";
                                                 this.updateDom();

                        } else {
                        }




                }

        },



                getDom: function() {

                        var wrapper = document.createElement("div");
                        if(this.door_state || this.door_state2){
                        wrapper.innerHTML = "<img src='/modules/MMM-door-sensor/img/"+this.door_state+"' width='100' />";
			wrapper.innerHTML += "<img src='/modules/MMM-door-sensor/img/"+this.door_state2+"' width='100' />";  
			} else {

			wrapper.innerHTML = "<img src='/modules/MMM-door-sensor/img/door_1_blanc.png' width='100' />";
                        wrapper.innerHTML += "<img src='/modules/MMM-door-sensor/img/door_2_blanc.png' width='100' />";
			}
                      return wrapper;
//		    }
                }
});
