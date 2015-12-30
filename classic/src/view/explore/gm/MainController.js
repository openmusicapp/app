Ext.define('OpenMusic.view.explore.gm.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.explore-gm-main'

	,onItemMouseEnter: function( view, record, item, index, e ) {
		var me = this;
		
	}
	
	,onItemClick: function( view, record, item, index, e ) {
		var me = this;
		
		me.getView().setActiveItem(1);
		me.getView().down('grid title').setText(record.get('title'));
		me.getView().down('grid').getStore().getProxy().setExtraParams({
			 api_key: '4B83VBZ1TZJHCZJLG'
			,format: 'json'
			,results: 100
			,type: 'genre-radio'
			,genre: record.get('value')
		});
		me.getView().down('grid').getStore().load();
	}
	
	,onItemContextMenu: function( view, record, item, index, e ) {
		var me = this;
		
		// Prevent showing native contextmenu
		e.preventDefault();
		
		alert('onItemContextMenu');
	}
	
	,onBack: function(btn, e) {
		var me = this;
		
		me.getView().setActiveItem(0);
		me.getView().down('grid').getStore().removeAll();
	}
	
	,doPlayAll: function(btn, e) {
		var me = this;
		
		me.getView().setActiveItem(0);
		Ext.first('queue').getStore().removeAll();
		
		var songs = [];
		me.getView().down('grid').getStore().each(function(rec, index) {
			songs.push({
				 id: rec.get('id')
				,title: rec.get('title')
				,artist_id: rec.get('artist_id')
				,artist_name: rec.get('artist_name')
				,order: index + 1
			});
		});
		
		Ext.first('queue').getStore().add(songs);
		//OpenMusic.util.Player.playAll = true;
		OpenMusic.util.Player.playAll();
	}
});
