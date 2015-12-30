Ext.define('OpenMusic.store.search.Artists', {
	 extend: 'Ext.data.Store'

	,alias: 'store.search-artists'

	,fields: [
		 'id'
		,'name'
		,'images'
	]
	
	,proxy: {
		 type: 'ajax'
		,url: 'http://developer.echonest.com/api/v4/artist/search?api_key=4B83VBZ1TZJHCZJLG&format=json&results=10'
		,reader: {
			 type: 'json'
			,rootProperty: 'response.artists'
		}
		,pageParam: ''
		,startParam: ''
		,sortParam: ''
		,limitParam: ''
		,noCache: false
	}
});
