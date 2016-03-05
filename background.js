//load();
alert("background.js");
var reminders = getReminders();


chrome.alarms.onAlarm.addListener(function(alarm) {
	alert("hi");

	var currDate = new Date();
	var counter = 0;

	alert(stringToDate(reminders[counter].time));
	
	while (counter < reminders.length && currDate >= stringToDate(reminders[counter].time)) {
		alert(reminders[counter].message);

	
		counter += 1;
	}
});

chrome.windows.onRemoved.addListener(function(windowId) {
	save();
})
