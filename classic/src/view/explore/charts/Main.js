Ext.define('OpenMusic.view.explore.charts.Main',{
	 extend: 'Ext.view.View'
	,xtype: 'exploreCharts'
	
	,requires: [
		 'OpenMusic.view.explore.charts.MainController'
		,'OpenMusic.view.explore.charts.MainModel'
		,'OpenMusic.store.explore.Charts'
	]

	,controller: 'explore-charts-main'
	,viewModel: {
		type: 'explore-charts-main'
	}

	,title: 'LISTAS DE ÉXITOS'
	,cls: 'playlistView'
	,tpl: [
		'<tpl for=".">',
			'<div class="playlist">',
			  '<img src="{thumb}" />',
			  '<br/><span>{title}</span>',
			'</div>',
		'</tpl>'
	]
	,itemSelector: 'div.playlist'
	,emptyText: 'No playlists available...'
	,store: {
		type: 'explore-charts'
	}
	,scrollable: 'vertical'
	
	,listeners: {
		 itemmouseenter: 'onItemMouseEnter'
		,itemclick: 'onItemClick'
		,itemdblclick: 'onItemDblClick'
		,itemcontextmenu: 'onItemContextMenu'
		,activate: 'onActivated'
	}
});
