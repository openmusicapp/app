Ext.define('OpenMusic.view.search.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.search-main'

	,onSongDblClick: function( grid, record, item, index, e ) {
		var me = this;
		
		console.log('onSongDblClick', record);
		
		Ext.first('queue').getStore().removeAll();
		
		Ext.first('queue').getStore().add({
			 id: record.get('id')
			,title: record.get('title')
			,artist_id: record.get('artist_id')
			,artist_name: record.get('artist_name')
		});
		//OpenMusic.util.Player.playAll = true;
		OpenMusic.util.Player.createPlaylistFromStore(true);
		
		//OpenMusic.util.Player.playSongByRecord(record);
	}
});
