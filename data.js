var reminders = [];
var completed = [];

function compare(a, b) {
	if (a.time < b.time)
		return -1;
	else if (a.time > b.time)
		return 1;
	else
		return 0;
}

function addCompleted(reminder) {
	reminders.push(reminder);
	reminders.sort(compare);
}

function deleteCompleted(index) {
	completed.splice(index, 1);
}

function addReminder(t, m) {
	reminders.push({time: t, message: m});
	reminders.sort(compare);
}

function deleteReminder(index) {
	completed.addCompleted(reminders[index]);
	reminders.splice(index, 1);
}

function addReminder(t, m) {
	reminders.push({time: t, message: m});
	reminders.sort(compare);
}

function save() {
	chrome.storage.local.set({'reminders': reminders});
	chrome.storage.local.set({'completed': completed});
}

function load() {
	chrome.storage.local.get('reminders', function (result) {
		reminders = result;
	});
	chrome.storage.local.get('completed', function(result) {
		completed = result;
	});
}

function getReminders() {
	return reminders;
}

function getCompleted() {
	return completed;
}