/*
var alarmClock = {

        onHandler : function(e) {
            chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.1} );
                    window.close();
        },

        offHandler : function(e) {
            chrome.alarms.clear("myAlarm");
                    window.close();
        },

        setup: function() {
            var a = document.getElementById('alarmOn');
            a.addEventListener('click',  alarmClock.onHandler);
            var b = document.getElementById('alarmOff');
            b.addEventListener('click',  alarmClock.offHandler);
        }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});
*/

document.addEventListener('DOMContentLoaded', function () {
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.1} );
                    window.close();
});