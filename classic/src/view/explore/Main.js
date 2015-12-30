Ext.define('OpenMusic.view.explore.Main',{
	 extend: 'Ext.tab.Panel'
	,xtype: 'explore'
	
	,requires: [
		 'OpenMusic.view.explore.MainController'
		,'OpenMusic.view.explore.MainModel'
		,'OpenMusic.view.explore.charts.Main'
		,'OpenMusic.view.explore.gm.Main'
	]

	,controller: 'explore-main'
	,viewModel: {
		type: 'explore-main'
	}

	,items: [
		{
			xtype: 'exploreCharts'
		}
		,{
			xtype: 'exploreGM'
		}
		,{
			TITLE: 'DESCUBRIR'
		}
	]
});
