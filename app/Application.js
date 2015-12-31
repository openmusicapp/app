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
		if ( Ext.isEmpty(localStorage.getItem('userToken')) ) {
			Ext.first('viewport').add({ xtype: 'login' });
			lock = new Auth0Lock('NEFDmDFm9rH7vln9ahIZKQbpdMYjiuzk', 'openmusic.auth0.com');
			lock.show(function(err, profile, token) {
				if (err) {
					// Error callback
					console.error(err, profile, token);
					alert('There was an error');
				} else {
					// Success callback

					// Save the JWT token.
					localStorage.setItem('userToken', token);
					localStorage.setItem('userProfile', Ext.encode(profile));
					
					console.info('User Profile', profile);
					
					// Save the profile
					userProfile = profile;
					
					Ext.first('login').destroy();
					OpenMusic.app.launch();
				}
			});
		} else {
			userProfile = Ext.decode(localStorage.getItem('userProfile'));
			Ext.first('viewport').add({ xtype: 'app-main' });
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
		}
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
