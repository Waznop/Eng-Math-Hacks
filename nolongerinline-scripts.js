$(document).ready(function(){
	
	var reminders = (function(){
		getReminders();
	})();

	$('#saveButton').click(function(){
		sendSave();
	});

	$('#setButton').submit(function() {
		var m = document.forms["setRem"]["msg"].value;
        var t = document.forms["setRem"]["time"].value;
        addReminder(t, m);
        location.reload();
	});
});
