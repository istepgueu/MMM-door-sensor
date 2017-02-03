/* global Module */

/* Magic Mirror
 * Module: Buttons
 *
 * By Joseph Bethge
 * MIT Licensed.
 */

Module.register("MMM-Buttons", {

    requiresVersion: "2.1.0",

    // Default module config.
    defaults: {
        buttons: [
             {
                   pin : 25,
                   name: "door 1",
            },
            {
                  pin : 26,
                  name: "door 2",
            }
       ],
        minShortPressTime: 0,
        maxShortPressTime: 500,
        minLongPressTime: 3000
    },

    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        this.sendConfig();

        this.intervals = [];
        this.alerts = [];
        for (var i = 0; i < this.config.buttons.length; i++)
        {
            this.intervals.push(undefined);
            this.alerts.push(false);
        }
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");

        return wrapper;
    },

    /* sendConfig()
     * intialize backend
     */
    sendConfig: function() {
        this.sendSocketNotification("BUTTON_CONFIG", {
            config: this.config
        });
    },

    buttonUp: function(index, duration) {
            var self = this;
            this.intervals[index] = undefined;
            clearTimeout(this.intervals[index]);
            clearInterval(this.intervals[index]);
          this.sendAction('DOOR_OPEN_'+ self.config.buttons[index].name);
          /*
        if (this.alerts[index]) {
            // alert already shown, clear interval to update it and hide it
            if (this.intervals[index] !== undefined) {
                clearInterval(this.intervals[index]);
            }
            this.alerts[index] = false;
            this.sendNotification("HIDE_ALERT");
        } else {
            // no alert shown, clear time out for showing it
            if (this.intervals[index] !== undefined) {
                clearTimeout(this.intervals[index]);
            }
        }
        this.intervals[index] = undefined;

        var min = this.config.minShortPressTime;
        var max = this.config.maxShortPressTime;
        var shortPress = this.config.buttons[index].shortPress
        var longPress = this.config.buttons[index].longPress

        if (shortPress && min <= duration && duration <= max)
        {
            //this.sendAction(shortPress);
            this.sendAction('DOOR_OPEN_â€™+ self.config.buttons[index].name);
        }

        min = this.config.minLongPressTime;
        if (longPress && min <= duration)
        {
            //this.sendAction(longPress);
            this.sendAction('DOOR_OPEN_â€™+ self.config.buttons[index].name);
        }
        */
    },

    buttonDown: function(index) {
        var self = this;
       /*
        if (self.config.buttons[index].longPress && self.config.buttons[index].longPress.title)
        {
            this.intervals[index] = setTimeout(function () {
                self.startAlert(index);
            }, this.config.maxShortPressTime);
        }
        */
        this.sendAction('DOOR_CLOSE_'+ self.config.buttons[index].name);
    },

    sendAction(description) {
        this.sendNotification(description, 1500);
    },

    showAlert: function (index) {
        // display the message
        this.sendNotification("SHOW_ALERT", {
            title: this.config.buttons[index].longPress.title,
            message: this.config.buttons[index].longPress.message,
            imageFA: this.config.buttons[index].longPress.imageFA
        });
    },

    startAlert: function(index) {
        this.alerts[index] = true;
        this.showAlert(index);
    },

    // Override socket notification handler.
    socketNotificationReceived: function(notification, payload) {
        if (notification === "BUTTON_UP")
        {
            this.buttonUp(payload.index, payload.duration);
        }
        if (notification === "BUTTON_DOWN")
        {
            this.buttonDown(payload.index);
        }
    },
});

