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
                        if (notification === "DOOR_STATE") {

                                this.door_state = payload;

                                this.updateDom();

                        }
                }

        },



                getDom: function() {

                        var wrapper = document.createElement("div");
                        if(this.door_state){
                        wrapper.innerHTML = "<img src=/modules/MMM-door-sensor/img/"+this.door_state+" />";
                        } else {
                        wrapper.innerHTML = 'No door state present.';
                        }
                        return wrapper;
                }
});
