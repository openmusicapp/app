/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('OpenMusic.Application', {
	extend: 'Ext.app.Application',

	name: 'OpenMusic',

	requires: [
		'OpenMusic.util.Player'
	],
	
	stores: [
		// TODO: add global / shared stores here
	],

	launch: function () {
		// TODO - Launch the application
		Ext.create('Ext.window.Window', {
			 title: 'Video'
			,id: 'videoPreview'
			,closable: false
			,draggable: false
			,resizable: false
			,autoShow: true
			,width: 560
			,height: 360
			,x: 0
			,y: document.body.clientHeight
			,html: '<div id="playerframe"></div>'
			,listeners: {
				hide: function(win) {
					OpenMusic.util.Player.player.setSize(1, 1);
					OpenMusic.util.Player.player.setPlaybackQuality('small');
					win.setY(document.body.clientHeight);
				}
			}
		});
		OpenMusic.util.Player.launch();
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
