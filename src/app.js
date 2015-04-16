var gui = require('nw.gui');
var win = gui.Window.get();


$('document').ready(function() {

	
//	win.setBadgeLabel("10");

	var msgCountReg = /\((\d)\)/;

	setInterval(function() {
		var res = msgCountReg.exec($("#app").contents().find("title").text());
		alert($("#app").contents().find("title").text());
		if (res && res.length>0) {
			var badge=res[1];
		}
		else {
			var badge ='';
		}
		// alert(badge);
		win.setBadgeLabel(badge);
	},200);

	//URL policy
	win.on('new-win-policy', function(frame, url, policy) {
	 gui.Shell.openExternal(url);
	 policy.ignore();
	});

});



