Ext.define('OpenMusic.view.search.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.search-main'

	,doSearch: function(field, e) {
		var me = this;
		Ext.log({ dump: field }, 'doSearch', field, e);
		
		// e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
		// e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
		if (e.getKey() == e.ENTER) {
			//alert('Buscando: '+field.getValue());
			me.getView().down('#artists').getStore().getProxy().setExtraParams({
				 name: field.getValue()
				,bucket: 'images'
			});
			me.getView().down('#songs').getStore().getProxy().setExtraParams({
				 api_key: '4B83VBZ1TZJHCZJLG'
				,format: 'json'
				,results: 30
				,rank_type: 'familiarity'
				,sort: 'artist_hotttnesss-desc'
				,mode: 1
				,song_type: 'studio'
				,combined: field.getValue()
			});
			me.getView().down('#artists').up('panel').show();
			me.getView().down('#songs').show();
			me.getView().down('#artists').getStore().load();
			me.getView().down('#songs').getStore().load();
		}
	}
	
	,onSongDblClick: function( grid, record, item, index, e ) {
		var me = this;
		
		console.log('onSongDblClick', record);
		
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
});
