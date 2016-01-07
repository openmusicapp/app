Ext.define('OpenMusic.view.explore.charts.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.explore-charts-main'
	
	,onActivated: function(view) {
		var me = this;
		
		/*
		Ext.defer(function() {
			// Use the JavaScript client library to create a search.list() API call.
			var request = gapi.client.youtube.playlists.list({
				 part: 'snippet'
				,channelId: 'UC-9-kyTW8ZkZNDHQJ6FgpwQ' // #Musica
				,maxResults: 50
				,regionCode: 'AR'
			});

			// Send the request to the API server,
			// and invoke onSearchRepsonse() with the response.
			request.execute(onSearchResponse);

			// Called automatically with the response of the YouTube API request.
			function onSearchResponse(response) {
				var playlists = [];

				Ext.each(response.items, function(playlist) {
					playlists.push({
						 id: playlist.id
						,title: playlist.snippet.title
						,description: playlist.snippet.description
						,thumb: playlist.snippet.thumbnails.medium
						,channelTitle: playlist.snippet.channelTitle
					});
				});

				view.getStore().add(playlists);
			}
		}, 5000, me);
		*/
	}

	,onItemMouseEnter: function( view, record, item, index, e ) {
		var me = this;
		
	}
	
	,onItemClick: function( view, record, item, index, e ) {
		var me = this;
		
		switch ( record.get('source') ) {
			case 'youtube':
				me.queueSongsFromPlaylist(record.get('playlistId'));
				Ext.defer(function() {
					OpenMusic.util.Player.loadPlaylist(record.get('playlistId'));
				}, 1000);
				break;
			case 'echonest':
				Ext.first('info').down('#playlistSongs').getStore().getProxy().setExtraParams(Ext.Object.mergeIf({
					 api_key: '4B83VBZ1TZJHCZJLG'
					,format: 'json'
				}, record.get('echoData')));
				Ext.first('info').down('#playlistSongs').getStore().load();
				Ext.first('info').floatCollapsedPanel();
			default:
				break;
		}
	}
	
	,onItemContextMenu: function( view, record, item, index, e ) {
		var me = this;
		
		// Prevent showing native contextmenu
		e.preventDefault();
	}
	
	,queueSongsFromPlaylist: function(playlistId) {
		var me = this;
		
		// Use the JavaScript client library to create a search.list() API call.
		var request = gapi.client.youtube.playlistItems.list({
			 part: 'snippet'
			,playlistId: playlistId
			,maxResults: 50
		});

		// Send the request to the API server,
		// and invoke onSearchRepsonse() with the response.
		request.execute(onSearchResponse);

		// Called automatically with the response of the YouTube API request.
		function onSearchResponse(response) {
			var songs = [];

			Ext.each(response.items, function(song) {
				songs.push({
					 title: song.snippet.title.split('-')[1]
					,artist_name: song.snippet.title.split('-')[0]
					,ytvideo_id: song.snippet.resourceId.videoId
				});
			});
			
			Ext.getCmp('queue').getStore().removeAll();
			Ext.getCmp('queue').getStore().add(songs);
		}
	}
});
