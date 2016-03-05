var reminders = [];

function compare(a, b) {
	if (a.time < b.time)
		return -1;
	else if (a.time > b.time)
		return 1;
	else
		return 0;
}

function deleteReminder(index) {
	reminders.splice(index, 1);
}

function addReminder(t, m) {
	reminders.push({time: t, message: m});
	reminders.sort(compare);
}

function save() {
	chrome.storage.sync.set({'reminders': reminders});
}

function load() {
	chrome.storage.local.get('reminders', function (result) {
		reminders = result;
	});
}

function getReminders() {
	return reminder;
}