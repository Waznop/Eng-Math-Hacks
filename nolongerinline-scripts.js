$(document).ready(function(){
	
	var reminders = (function(){
		getReminders();
	});

	$('#saveButton').click(function(){
		var cur = new Date();
		var lstOfRems = document.getElementById('editable').childNodes;
		for (var i = 0; i < lstOfRems.length; i++) {
			var remDate = stringToDate(lstOfRems[i].idtime);
			if (remDate <= cur) {
				toDel.push(lstOfRems[i].id);
			}
		}
		alert(toDel);
		deleteReminders(toDel);
		location.reload();
	});

	$('#setButton').submit(function(e) {
		e.preventDefault();
		var m = document.forms["setRem"]["msg"].value;
	    var t = document.forms["setRem"]["time"].value;
	    addReminder(t, m);
	    location.reload();
	});
});

