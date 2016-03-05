var reminders = [];
var completed = [];

// {time: "2016-02-04T11:24", message: "It's almost noon!", deleted: false}
// {time: "2016-02-04T11:42", message: "It's getting warmer.", deleted: false}
// {time: "2016-02-04T11:59", message: "One more minute!", deleted: false}

function compare(a, b) {
	var dateA = stringToDate(a.time);
	var dateB = stringToDate(b.time);
	if (dateA < dateB)
		return -1;
	else if (dateA > dateB)
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
	completed.push(reminder);
	completed.sort(compare);
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

function deleteReminder(index) {
	addCompleted(reminders[index]);
	reminders.splice(index, 1);
<<<<<<< HEAD
=======
	//save();
>>>>>>> 3846b075506667793525b38fefe6a235d4f28613
}

function deleteReminders(indices) {
	for (var i = 0; i < indices.length; i++) {
		reminders[indices[i]].deleted = true;
	}
<<<<<<< HEAD
	
=======

>>>>>>> 3846b075506667793525b38fefe6a235d4f28613
	for (var i = 0; i < reminders.length; i++) {
		if (reminders[i].deleted) {
			deleteReminder(i);
			i--;
		}
	}
<<<<<<< HEAD
	save();
=======
	//save();
>>>>>>> 3846b075506667793525b38fefe6a235d4f28613
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