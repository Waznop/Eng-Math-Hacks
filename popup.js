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


function validDate (year, month, day, hours, minutes) {
	var currentDate = Date();
	
	if ((year > currentDate.getfullYear()) ||
	    (year < 0))
	
}
*/

document.getElementById("set").onclick = function() {
	alert("setting Date()");
	
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var hours = document.getElementById("hours").value;
	var minutes = document.getElementById("minutes").value;
	
	var date = new Date(year, month, day, hours, minutes, 0, 0)
	var message = document.getElementById("message").innerHTML;
	addReminder(date, message);
	save();
};

document.addEventListener('DOMContentLoaded', function () {
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.5} );
                    window.close();
});