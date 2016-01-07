Ext.define('OpenMusic.view.main.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.main-main'

	,doSearch: function(field, e) {
		var me = this;
		Ext.log({ dump: field }, 'doSearch', field, e);
		
		me.getView().down('tabpanel').setActiveTab(0);
		
		// e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
		// e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
		if (e.getKey() == e.ENTER) {
			//alert('Buscando: '+field.getValue());
			me.getView().down('#artists').getStore().getProxy().setExtraParams({
				 name: field.getValue()
				,bucket: 'images'
			});
			me.getView().down('#songs').getStore().getProxy().setExtraParams({
				 api_key: '4B83VBZ1TZJHCZJLG'
				,format: 'json'
				,results: 30
				,rank_type: 'familiarity'
				,sort: 'artist_hotttnesss-desc'
				,mode: 1
				,song_type: 'studio'
				,combined: field.getValue()
			});
			me.getView().down('#artists').up('panel').show();
			me.getView().down('#songs').show();
			me.getView().down('#artists').getStore().load();
			me.getView().down('#songs').getStore().load();
		}
	}
});
