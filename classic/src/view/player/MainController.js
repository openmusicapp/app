Ext.define('OpenMusic.view.player.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.player-main'

	,onRelatedDblClick: function( view, record, item, index, e ) {
		var me = this;
		
		console.log('onRelatedClick', record);
		
		// Use the JavaScript client library to create a search.list() API call.
		var request = gapi.client.youtube.search.list({
			 part: 'snippet'
			,regionCode: 'US'
			,type: 'video'
			,videoCategoryId: 10 // Music
			,q: record.get('artist_name') + ' ' + record.get('title')
		});

		// Send the request to the API server,
		// and invoke onSearchRepsonse() with the response.
		request.execute(onSearchResponse);

		// Called automatically with the response of the YouTube API request.
		function onSearchResponse(response) {
			OpenMusic.util.Player.loadSong(response.result.items[0].id.videoId);
		}
	}
	
	,showVideo: function(btn, pressed) {
		var me = this;
		
		console.log(btn);
		
		if ( pressed ) {
			OpenMusic.util.Player.player.setSize(560, 315);
			OpenMusic.util.Player.player.setPlaybackQuality('default');
			Ext.getCmp('videoPreview').setY(document.body.clientHeight - 360 - 65);
		} else {
			OpenMusic.util.Player.player.setSize(1, 1);
			OpenMusic.util.Player.player.setPlaybackQuality('small');
			Ext.getCmp('videoPreview').setY(document.body.clientHeight);
		}
	}
	
	,onShuffle: function(btn, pressed) {
		var me = this;
		
		OpenMusic.util.Player.shufflePlay(pressed);
	}
	
	,onRepeat: function(btn, pressed) {
		var me = this;
		
		OpenMusic.util.Player.repeatPlay(pressed);
	}
	
	,onVolumeMute: function(btn, e) {
		var me = this;
		
		OpenMusic.util.Player.player.setVolume(0);
		Ext.getCmp('volumeSlider').setValue(0);
	}
	
	,onVolumeAll: function(btn, e) {
		var me = this;
		
		OpenMusic.util.Player.player.setVolume(100);
		Ext.getCmp('volumeSlider').setValue(100);
	}
	
	,onVolumeChanged: function(slider, e) {
		var me = this;
		
		OpenMusic.util.Player.player.setVolume(slider.getValue());
	}
});
