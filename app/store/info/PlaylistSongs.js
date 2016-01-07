Ext.define('OpenMusic.store.info.PlaylistSongs', {
	 extend: 'Ext.data.Store'

	,alias: 'store.info-playlistsongs'

	,fields: [
		 'id'
		,'title'
		,'artist_id'
		,'artist_name'
	]
	
	,proxy: {
		 type: 'ajax'
		,url: 'http://developer.echonest.com/api/v4/playlist/static'
		/*
		,extraParams: {
			 api_key: '4B83VBZ1TZJHCZJLG'
			,format: 'json'
			,results: 30
			,rank_type: 'familiarity'
			,sort: 'artist_hotttnesss-desc'
			,mode: 1
			,song_type: 'studio'
		}
		*/
		,reader: {
			 type: 'json'
			,rootProperty: 'response.songs'
		}
		,pageParam: ''
		,startParam: ''
		,sortParam: ''
		,limitParam: ''
		,cacheString: ''
		,noCache: false
	}
});
