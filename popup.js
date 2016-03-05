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

document.getElementById("set").onclick(function() {
	alert("it works");
	var date = new Date(document.getElementById("year").value,
						document.getElementById("month").value,
						document.getElementById("day").value,
						document.getElementById("hours").value,
						document.getElementById("minutes").value,
						0,
						0)
	var message = document.getElementById("message").innerHTML;
	addReminder(date, message);
	save();
})

document.addEventListener('DOMContentLoaded', function () {
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.1} );
                    window.close();
});