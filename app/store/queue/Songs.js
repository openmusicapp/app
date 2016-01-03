Ext.define('OpenMusic.store.queue.Songs', {
	 extend: 'Ext.data.Store'

	,alias: 'store.queue-songs'

	,fields: [
		 'id'
		,'title'
		,'artist_id'
		,'artist_name'
		,{
			 name: 'status'
			,type: 'string'
			,defaultValue: 'queued'
		}
	]
	,autoLoad: true
	,proxy: {
		 type: 'memory'
	}
});
