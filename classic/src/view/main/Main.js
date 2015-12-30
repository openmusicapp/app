/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('OpenMusic.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		 'Ext.window.MessageBox'
		,'OpenMusic.view.main.MainController'
		,'OpenMusic.view.main.MainModel'
		,'OpenMusic.view.player.Main'
		,'OpenMusic.view.main.List'
		,'OpenMusic.view.search.Main'
		,'OpenMusic.view.explore.Main'
		,'OpenMusic.view.queue.Main'
	],

	controller: 'main',
	viewModel: 'main',

	ui: 'navigation',
	plugins: 'responsive',

	title: 'Open Music',
	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,
	activeTab: 1,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconAlign: 'top',
		iconCls: 'logo'
	},

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		 bodyPadding: 20
		,scrollable: 'vertical'
		,tabConfig: {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					iconAlign: 'top',
					textAlign: 'center'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},

	items: [{
		 title: 'Buscar'
		,xtype: 'search'
		,iconCls: 'fa-search'
		,padding: 20
	}, {
		title: 'Explorar',
		xtype: 'explore',
		iconCls: 'fa-rocket'
	}, {
		title: 'Radio',
		iconCls: 'fa-headphones',
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'Tu música<br>(Comming soon...)',
		iconCls: 'fa-archive',
		disabled: true,
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'Cola',
		xtype: 'queue',
		iconCls: 'fa-reorder',
		bodyPadding: 0
	}, {
		iconCls: 'fa-cog',
		bind: {
			html: '{loremIpsum}'
		}
	}]
	/*
	,dockedItems: [
		{
			 xtype: 'player'
			,dock: 'bottom'
		}
	]
	*/
});
