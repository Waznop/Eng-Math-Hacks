chrome.alarms.onAlarm.addListener(function(alarm) {
	reminders = getReminders();
	currDate = new Date();
	counter = 0;

	while (counter < reminders.length() && currTime <= reminder[counter].time) {
		alert(reminder[counter].message);
		deleteReminder(counter);
		counter += 1;
	}
});