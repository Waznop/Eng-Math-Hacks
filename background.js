//load();
alert("background.js");

chrome.alarms.onAlarm.addListener(function(alarm) {
	alert("hi");

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

chrome.windows.onRemoved.addListener(function(windowId) {
	save();
})
