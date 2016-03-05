
var reminders = [{time: "2016-02-04T11:24", message: "It's almost noon!", deleted: false}, 
{time: "2016-02-04T11:42", message: "It's getting warmer.", deleted: false},
{time: "2016-02-05T11:59", message: "One more minute!", deleted: false}];
var completed = [];

// {time: "2016-02-04T11:24", message: "It's almost noon!", deleted: false}
// {time: "2016-02-04T11:42", message: "It's getting warmer.", deleted: false}
// {time: "2016-02-04T11:59", message: "One more minute!", deleted: false}

alert("data.js");    

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
	alert("add completed");
	completed.push(reminder);
	alert("sort completed");
	completed.sort(compare);
	alert("save completed");
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
	for (var i = length; i >= 0; i--) {
		if(reminders[i].deleted)
			deleteReminder(i);
	}
}

function deleteReminder(index) {
	alert("here?");
	addCompleted(reminders[index]);
	alert("here???");

	reminders.splice(index, 1);

	alert("HEREEE??????");
	//save();
}

function deleteReminders(indices) {
	//alert(reminders);

	for (var i = 0; i < indices.length; i++) {
		reminders[indices[i]].deleted = true;
	}

	
	for (var i = 0; i < reminders.length; i++)
		alert(reminders[i].deleted);

	for (var i = 0; i < reminders.length; i++) {
		alert(i);		
		alert(reminders.length);
		if (reminders[i].deleted) {
			alert("if");
			deleteReminder(i);
			i--;
			alert("endif");
		}
	}
	alert(reminders);
	//save();
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

