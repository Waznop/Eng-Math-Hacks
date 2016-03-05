load();
alert("background.js");

chrome.alarms.onAlarm.addListener(function(alarm) {
	alert("hi");

	var currDate = new Date();
	var reminders = getReminders();
	var counter = 0;
	var toDelete = [];

	while (counter < reminders.length && currDate >= stringToDate(reminders[counter].time)) {
		alert(reminders[counter].message);
	
		counter += 1;
		toDelete.push(counter); 
		//tell website to call refresh 
	}

	deleteReminders(toDelete);
});

chrome.windows.onRemoved.addListener(function(windowId) {
	save();
})
