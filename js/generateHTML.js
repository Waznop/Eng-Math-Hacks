var htmlcode = "";
load(function() {
	for (var i = 0; i < reminders.length; i++) {
	htmlcode += "<li class=\"list-group-item\" id=\"" + i + "\" idtime=\"" + reminders[i].time + "\"><div align=\"center\"><p>" + reminders[i].message + "</p><font size=\"2\">" + reminders[i].time + "</font></div><div align=\"right\"><font color=\"red\"><i class=\"js-remove\" color=\"red\">✖</i> </font> </div></li>";
	}
	$("#editable").append(htmlcode);
});
