load();
alert("");
var reminders = getReminders();
alert(reminders[0].message);

chrome.alarms.onAlarm.addListener(function(alarm) {
	//alert("hi");

	var currDate = new Date();
	var counter = 0;
	
	while (counter < reminders.length && currDate >= reminders[counter].time) {
		alert(reminders[counter].message);
		counter += 1;
	}
});

chrome.windows.onRemoved.addListener(function(windowId) {
	save();
})
