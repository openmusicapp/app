Ext.define('OpenMusic.store.player.Related', {
	 extend: 'Ext.data.Store'

	,alias: 'store.player-related'

	,fields: [
		 'artist_id'
		,'id'
		,'artist_name'
		,'title'
	]
	
	,proxy: {
		 type: 'ajax'
		,url: 'http://developer.echonest.com/api/v4/playlist/basic'
		/*
		,extraParams: {
			 api_key: '4B83VBZ1TZJHCZJLG'
			,format: 'json'
			,results: 10
			,type: 'artist-radio'
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
