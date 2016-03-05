load();
alert("");
var reminders = getReminders();

function printObject(o) {
  var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  alert(out);
}

alert(JSON.stringify (reminders[0].time));

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
