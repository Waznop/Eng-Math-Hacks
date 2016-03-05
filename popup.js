/*
var alarmClock = {

        onHandler : function(e) {
            
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

function validDate (year, month, day, hours, minutes) {
	var currentDate = Date();
	
	if ((year > currentDate.getfullYear()) ||
	    (year < 0))
	
}

document.addEventListener('DOMContentLoaded', function () {
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.1} );
                    window.close();
}


/*
function addReminder(msg, time) {
	document.getElementById('msgtemp').innerHTML = msg;
	document.getElementById('timetemp').innerHTML = time;
	
}
*/

/*
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
<<<<<<< Updated upstream
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.1} );
                    window.close();
=======
    alarmClock.setup();
>>>>>>> Stashed changes
});


var reminders = getReminders();
*/
		
function myFn() {
	alert((document.getElementById('message').value) + " @ " + (document.getElementById('datetime').value));
	
	/*
	addReminder((document.getElementById('datetime').value),
				(document.getElementById('message').value));
	
	reminders = getReminders();
	
	var addr = document.getElementById('testVal');
	
	addr.innerHTML = "";
	alert(reminders[i].message + " @ " + reminders[i].time);
	
	for (var i = 0; i < reminders.length; i++) {
		addr.innerHTML = addr.innerHTML + reminders[i].message +" @ "+ reminders[i].time +" \n";
	}
	
	*/
}