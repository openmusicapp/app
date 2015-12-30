Ext.define('OpenMusic.store.explore.SGM', {
	 extend: 'Ext.data.Store'

	,alias: 'store.explore-sgm'

	,fields: [
		 'id'
		,'name'
		,'images'
	]
	
	,proxy: {
		 type: 'ajax'
		,url: 'http://developer.echonest.com/api/v4/playlist/basic'
		,reader: {
			 type: 'json'
			,rootProperty: 'response.songs'
		}
		,pageParam: ''
		,startParam: ''
		,sortParam: ''
		,limitParam: ''
		,noCache: false
	}
});
