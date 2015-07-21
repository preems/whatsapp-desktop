var gui = require('nw.gui');
var win = gui.Window.get();
var version = gui.App.manifest.version;

var platform = process.platform;
platform = /^win/.test(platform) ? 'win'
         : /^darwin/.test(platform) ? 'osx64'
         : 'linux' + (process.arch == 'ia32' ? '32' : '64');

if(platform==='win') {
	var tray = new gui.Tray({ title: 'WhatsApp', icon: 'WhatsApp.png' });
	var menu = new gui.Menu();
    menu.append(new gui.MenuItem({ label: 'Open WhatsApp', click: function() { win.show(); } }));
    menu.append(new gui.MenuItem({ label: 'Close WhatsApp', click: function() { win.close(true); } }));
    tray.on('click',function() {
    	win.show();
    });

    tray.menu = menu;
}
else if(platform=='osx64') {
	var menu = new gui.Menu({type:'menubar'});
	menu.createMacBuiltin('WhatsApp', {
		hideEdit:false,
	});
	win.menu=menu;
}         

win.on('close',function(force) {
	if (force) {
		win.close(true);
	}
	else {
		win.hide();
	}
});

 gui.App.on('reopen', function() {
    win.show();
  });


$('document').ready(function() {

	var msgCountReg = /\((\d)\)/;

	setInterval(function() {
		var res = msgCountReg.exec($("#app").contents().find("title").text());
		if (res && res.length>0) {
			var badge=res[1];
		}
		else {
			var badge ='';
		}
		win.setBadgeLabel(badge);
	},200);

	//URL policy
	win.on('new-win-policy', function(frame, url, policy) {
	 gui.Shell.openExternal(url);
	 policy.ignore();
	});



	//Check for Update
	var updateURL='http://preetham.in/public/whatsapp/checkUpdate.php?version='+version+'&platform='+platform;

	$.getJSON(updateURL,function(response) {
		if(response.updateAvailable==true) {
			//alert('New version of WhatsApp for Desktop is available. <a href="'+response.downloadLink+'">Click here to download.</a>');
			if (confirm("New version of WhatsApp for Desktop is available. Would you like to download the update now ?")) {
				gui.Shell.openExternal(response.downloadLink);
				gui.App.quit();
			}
		}
	});

});

