load();

chrome.alarms.onAlarm.addListener(function(alarm) {
	var reminders = getReminders();
	var currDate = new Date();
	counter = 0;

	while (counter < reminders.length() && currTime <= reminder[counter].time) {
		alert(reminder[counter].message);
		deleteReminder(counter);
		counter += 1;
	}
});

chrome.windows.onRemoved.addListener(function(windowId) {
	save();
})