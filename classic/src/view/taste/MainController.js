Ext.define('OpenMusic.view.taste.MainController', {
	 extend: 'Ext.app.ViewController'
	,alias: 'controller.taste-main'
	
	,showPrev: function(btn, e) {
		var me = this;
		
		me.getView().getLayout().prev();
	}
	
	,showNext: function(btn, e) {
		var me = this;
		
		me.getView().getLayout().next();
	}

	,doGenreFilter: function(field, newValue, oldValue) {
		var me = this;
		
		var m = me.getView().down('itemselector');
		var store = m.fromField.getStore();
		var myFilter = new Ext.util.Filter({
			 property: 'name'
			,anyMatch: false
			,value: newValue
		});
		
		if ( newValue != null ) {
			store.addFilter(myFilter);
		} else {
			store.removeFilter(myFilter);
		}
	}
});
