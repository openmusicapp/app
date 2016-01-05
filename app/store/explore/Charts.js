Ext.define('OpenMusic.store.explore.Charts', {
	 extend: 'Ext.data.Store'

	,alias: 'store.explore-charts'
	,fields: [
		 'id'
		,'playlistId'
		,'title'
		,'description'
		,'thumb'
		,'channelTitle'
	]
	,autoLoad: true
	,proxy: {
		 type: 'memory'
	}
	
	,data: [{
		 playlistId: 'PLYbjH_BWVdHS0pDdHhg19hZLDLSX9LZaz'
		,title: 'El Top 50 Global'
		,description: ''
		,thumb: 'resources/charts/7c41f9cb323018476fbcb769b80cbbfd60cce078.jpg'
		,channelTitle: ''
	},{
		 playlistId: 'PLYbjH_BWVdHQ5EICWP7KGMNVPEQrzj7oe'
		,title: 'El Top 50 de Argentina'
		,description: ''
		,thumb: 'resources/charts/9476ab5a939577fbb11d1ef3524f3471a40e2e08.jpg'
		,channelTitle: ''
	},{
		 playlistId: ''
		,title: 'Los 50 más virales de Argentina'
		,description: ''
		,thumb: 'resources/charts/a6bc1d34eb2f90f7159c3162b69ccf41073b802b.jpg'
		,channelTitle: ''
	},{
		 playlistId: ''
		,title: 'Los 50 más virales globales'
		,description: ''
		,thumb: 'resources/charts/c90916ccfaf7f7d9e19c19425dcb8bf6fd23f9a1.jpg'
		,channelTitle: ''
	}]
	/*
	,fields: [
		 'title'
		,'source'
		,'thumb'
		,'data'
	]
	
	,autoLoad: true
	,proxy: {
		 type: 'ajax'
		,url: 'https://raw.githubusercontent.com/saenzramiro/cardenal-playlists/master/AR/charts.json'
		,reader: {
			 type: 'json'
			,rootProperty: 'playlists'
		}
		,pageParam: ''
		,startParam: ''
		,sortParam: ''
		,limitParam: ''
	}
	*/
});
