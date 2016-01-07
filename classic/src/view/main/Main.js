/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('OpenMusic.view.main.Main', {
	 extend: 'Ext.panel.Panel'
	,xtype: 'app-main'
	
	,requires: [
		 'Ext.window.MessageBox'
		,'Ext.tab.Panel'
		,'Ext.tree.Panel'
		,'OpenMusic.view.main.MainController'
		,'OpenMusic.view.main.MainModel'
		,'OpenMusic.view.player.Main'
		,'OpenMusic.view.search.Main'
		,'OpenMusic.view.explore.Main'
		,'OpenMusic.view.queue.Main'
		,'OpenMusic.view.info.Main'
	]
	
	,controller: 'main-main'
	,viewModel: {
		type: 'main-main'
	}
	
	,layout: 'border'
	,items: [
		{
			region: 'center',
			xtype: 'tabpanel',
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
				},
				items:[{
					xtype: 'tbfill'
				},{
					 xtype: 'treepanel'
					,title: 'Playlists'
					,rootVisible: false
					,rowLines: true
					,scrollable: 'vertical'
					,height: 200
					,width: 200
					,tabConfig: {}
					,bodyPadding: 0
					,root: {
						text: "Root node",
						expanded: true,
						children: [
							{ text: "My Rock!", leaf: true },
							{ text: "Relax", leaf: true }
						]
					}
					,tools: [
						{
							type: 'plus'
						}
					]
				}]
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
							iconAlign: 'left',
							textAlign: 'left'
						},
						tall: {
							iconAlign: 'top',
							textAlign: 'center',
							width: 120
						}
					}
				}
			},
			dockedItems: [
				{
					 dock: 'top'
					,xtype: 'toolbar'
					,cls: 'topToolbar'
					,items: [
						{
							 xtype: 'textfield'
							,emptyText: 'Buscar...'
							,dock: 'top'
							,width: 200
							,triggers: {
								clear: {
									 cls: 'x-form-clear-trigger'
									,handler: function(field) {
										field.reset();
									}
								}
							}
							,listeners: {
								specialkey: 'doSearch'
							}
						}
						,'->'
						,{
							 xtype: 'button'
							,id: 'profileBtn'
							,baseCls: 'profileBtn'
							,scale: 'medium'
							,menuAlign: 'tr-br'
							,menu: [
								{
									text: 'Profile'
								}
								,{
									text: 'Configuration'
								}
								,{
									 text: 'Logout'
									,handler: function() {
										localStorage.removeItem('userToken');
										localStorage.removeItem('userProfile');
										location.reload();
									}
								}
							]
						}
					]
				}
			],
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
				title: 'Tu música',
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
		}
		,{
			 xtype: 'container'
			,region: 'south'
			,id: 'progressBar'
			,width: '100%'
			,height: 5
			,items: [
				{
					 xtype: 'progressbar'
					,width: '100%'
				}
				,{
					 xtype: 'slider'
					,hidden: true
					,hideLabel: true
					,useTips: false
					,allowAutoUpdate: true
					,cls: 'no-bg'
					,margin: '-19px 0 0 0'
					,width: '100%'
					,listeners: {
						 dragstart: function(slider) {
							slider.allowAutoUpdate = false;
						}
						,dragend: function(slider) {
							slider.allowAutoUpdate = true;
						}
						,change: function(slider) {
							OpenMusic.util.Player.player.seekTo(slider.getValue());
						}
					}
				}
			]
			,listeners: {
				afterrender: function(p, e) {
					p.el.on('mouseover', function(){
						p.down('slider').show();
						//p.el.setStyle('top', '10px'); // Fix styled bug
					});
					p.el.on('mouseout', function(){
						p.down('slider').hide();
						//p.el.setStyle('top', '10px'); // Fix styled bug
					});
				}
			}
		}
		,{
			 region: 'south'
			,xtype: 'player'
		}
		,{
			 region: 'east'
			,xtype: 'info'
		}
	]

	,listeners: {
		afterrender: function( panel ) {
			//panel.down('#profileBtn').setText(userProfile.name);
			panel.down('#profileBtn').setIcon(userProfile.picture);
		}
	}
	
	/*
	,dockedItems: [
		{
			 xtype: 'player'
			,dock: 'bottom'
		}
	]
	*/
});
