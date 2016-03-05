var reminders = [];
var completed = [];

alert("data.js");    

function compare(a, b) {
	if (a.time < b.time)
		return -1;
	else if (a.time > b.time)
		return 1;
	else
		return 0;
}

function save() {
	chrome.storage.local.clear();
	chrome.storage.local.set({'reminders': reminders}, function() {});
	chrome.storage.local.set({'completed': completed}, function() {});
}

function load() {
	chrome.storage.local.get('reminders', function (result) {
		if (!chrome.runtime.error) {
			reminders = result.reminders;
		}
	});
	chrome.storage.local.get('completed', function(result) {
		if (!chrome.runtime.error)
			completed = result.completed;
	});
}

function addCompleted(reminder) {
	reminders.push(reminder);
	reminders.sort(compare);
	save();
}

function deleteCompleted(index) {
	completed.splice(index, 1);
	save();
}

function addReminder(t, m) {
	reminders.push({time: t, message: m, deleted: false});
	reminders.sort(compare);
	save();
}

function setDeleted(index) {
	reminders[index].deleted = true;
}

function deleteDeleted() {
	var length = reminders.length
	for (int i = length; i >= 0; i--)
		if(reminders[i].deleted)
			deleteReminder(i);
}

function deleteReminder(index) {
	completed.addCompleted(reminders[index]);
	reminders.splice(index, 1);
	save();
}

function deleteReminders(indices) {
	for (int i = 0; i < indices.length; i++) {
		if (reminders[indices[i]].deleted = true;
	}
	for (int i = reminders.length - 1; i >= 0; i--) {
		if (reminders[i].deleted)
			deletedReminder(i);
	}
}

function stringToDate(s) {
	var year = s.substring(0,4);
	var month = s.substring(5,7);
	var day = s.substring(8,10);
	var hours = s.substring(11,13);
	var minutes = s.substring(14);
	return new Date(year, month, day, hours, minutes, 0, 0);
}

function getReminders() {
	return reminders;
}

function getCompleted() {
	return completed;
}