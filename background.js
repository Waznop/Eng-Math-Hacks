load();
alert("background2.js");
addReminder("2016-02-05T02:00", "plz");

document.addEventListener('DOMContentLoaded', function () {
    chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.1} );0
});

chrome.alarms.onAlarm.addListener(function(alarm) {
	var reminders = getReminders();
	var currDate = new Date();
	var counter = 0;
	var toDelete = [];

	while (counter < reminders.length && currDate >= stringToDate(reminders[counter].time)) {
		alert(reminders[counter].message);
		toDelete.push(counter);
		counter += 1;
	}
	
	alert(toDelete);
	deleteReminders(toDelete);
});

