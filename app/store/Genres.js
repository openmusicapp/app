Ext.define('OpenMusic.store.Genres', {
	 extend: 'Ext.data.Store'

	,alias: 'store.genres'

	,fields: [
		 'name'
		,'urls'
		,'description'
		,'scores'
	]
	
	,autoLoad: true
	,proxy: {
		 type: 'ajax'
		,url: 'http://developer.echonest.com/api/v4/genre/list?api_key=4B83VBZ1TZJHCZJLG&format=json&results=1383&bucket=description&bucket=urls&bucket=genre_scores'
		,reader: {
			 type: 'json'
			,rootProperty: 'response.genres'
		}
		,pageParam: ''
		,startParam: ''
		,sortParam: ''
		,limitParam: ''
		,noCache: false
	}
});
