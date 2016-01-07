Ext.define('OpenMusic.view.Viewport', {
	 extend: 'Ext.Viewport'

	,requires: [
		 'Ext.plugin.Viewport'
		,'OpenMusic.view.main.Login'
		,'OpenMusic.view.main.Main'
		,'OpenMusic.view.taste.Main'
	]

	,layout: 'fit'
});
