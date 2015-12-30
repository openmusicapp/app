Ext.define('OpenMusic.store.search.Songs', {
	 extend: 'Ext.data.Store'

	,alias: 'store.search-songs'

	,idProperty: 'mkid'
	,fields: [
		 'mkid'
		,'title'
		,'length'
		,'artist_references'
	]
	
	,proxy: {
		 type: 'ajax'
		,url: 'https://music-api.musikki.com/v1/songs?appkey=09d34090469c616ad6997a597f87f9c9&appid=5e0bc74bc89c4b6ca9cacb5c2ba198cf'
		,reader: {
			 type: 'json'
			,rootProperty: 'results'
		}
		,pageParam: ''
		,startParam: ''
		,sortParam: ''
		,limitParam: ''
		,cacheString: ''
	}
});
