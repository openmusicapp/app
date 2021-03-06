Ext.define('OpenMusic.view.queue.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.queue-main'
	/*
	,onSongDblClick: function( grid, record, item, index, e ) {
		var me = this;
		
		console.log('onSongDblClick', record);
		
		OpenMusic.util.Player.playVideoAt(index);
	}
	*/
	,onSongDblClick: function( grid, record, item, index, e ) {
		var me = this;
		
		console.log('onSongDblClick', record);
		
		// Use the JavaScript client library to create a search.list() API call.
		var request = gapi.client.youtube.search.list({
			 part: 'snippet'
			,regionCode: 'US'
			,type: 'video'
			,videoCategoryId: 10 // Music
			//,order: 'viewCount'
			,q: record.get('artist_name') + ' ' + record.get('title')
		});

		// Send the request to the API server,
		// and invoke onSearchRepsonse() with the response.
		request.execute(onSearchResponse);

		// Called automatically with the response of the YouTube API request.
		function onSearchResponse(response) {
			Ext.each(response.result.items, function(video) {
				var findChannelTitle = video.snippet.channelTitle;
				var isVevo = findChannelTitle.match(/VEVO/g); //checks to see if this is VEVO content. We only wan't to use Vevo videos. 
				if (isVevo){ //returns true if VEVO is found in the channel title
					OpenMusic.util.Player.loadSong(video.id.videoId);
				} else {
					return false;
				}
			});
		}
	}
});
