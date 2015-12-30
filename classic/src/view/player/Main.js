Ext.define('OpenMusic.view.player.Main',{
	 extend: 'Ext.toolbar.Toolbar'
	,xtype: 'player'
	,id: 'player'
	
	,requires: [
		 'OpenMusic.view.player.MainController'
		,'OpenMusic.view.player.MainModel'
		,'OpenMusic.store.player.Related'
		,'Ext.container.ButtonGroup'
	]

	,controller: 'player-main'
	,viewModel: {
		type: 'player-main'
	}
	
	,height: 60
	,items: [
		{
			 xtype: 'container'
			,cls: 'cover'
			,itemId: 'cover'
			,data: {
				 thumb: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg'
				,song_title: 'Hello'
				,artist_name: 'Adele'
			}
			,tpl: [
				 '<img class="thumb" src="{thumb}" />'
				,'<div class="songtitle">{song_title}</div>'
				,'<div class="artistname">{artist_name}</div>'
			]
		}
		,{
			 iconCls: 'fa fa-youtube-play'
			,baseCls: ''
			,margin: '0 10'
			,enableToggle: true
			,listeners: {
				toggle: 'showVideo'
			}
		}
		,{
			 iconCls: 'fa fa-heart'
			,baseCls: ''
			,margin: '0 10'
		}
		,{
			 iconCls: 'fa fa-plus'
			,baseCls: ''
			,margin: '0 10'
		}
		,{
			xtype: 'tbfill'
		}
		/*
		,{
			 xtype: 'container'
			,id: 'progressBar'
			,width: '100%'
			,height: 20
			,margin: '5 0 0 0'
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
					,margin: '-21px 0 0 0'
					,width: '100%'
					,listeners: {
						 dragstart: function(slider) {
							slider.allowAutoUpdate = false;
						}
						,dragend: function(slider) {
							slider.allowAutoUpdate = true;
							OpenMusic.util.Player.player.seekTo(slider.getValue());
						}
					}
				}
			]
			,listeners: {
				afterrender: 'onAfterRender'
			}
		}
		,{
			 xtype: 'container'
			,itemId: 'times'
			,layout: 'hbox'
			,width: '100%'
			,items: [
				{
					 xtype: 'label'
					,itemId: 'current'
					,flex: 1
					,text: '00:00'
				}
				,{
					 xtype: 'label'
					,itemId: 'total'
					,flex: 1
					,style: 'text-align:right;'
					,text: '00:00'
				}
			]
		}
		*/
		,{
			 iconCls: 'fa fa-random'
			,enableToggle: true
			,baseCls: ''
			,margin: '0 30'
			,listeners: {
				toggle: 'onShuffle'
			}
		}
		,{
			 iconCls: 'fa fa-step-backward'
			,baseCls: ''
			,margin: '0 20'
			,handler: function() {
				OpenMusic.util.Player.prevSong();
			}
		}
		,{
			 iconCls: 'fa fa-play'
			,itemId: 'playPause'
			,scale: 'large'
			,baseCls: 'play'
			,enableToggle: true
			,handler: function() {
				OpenMusic.util.Player.toggleSong();
			}
			,listeners: {
				toggle: function( btn, pressed ) {
					btn.setIconCls(pressed ? 'fa fa-pause' : 'fa fa-play');
				}
			}
		}
		,{
			 iconCls: 'fa fa-step-forward'
			,baseCls: ''
			,margin: '0 20'
			,handler: function() {
				OpenMusic.util.Player.nextSong();
			}
		}
		,{
			 iconCls: 'fa fa-retweet'
			,baseCls: ''
			,margin: '0 30'
			,enableToggle: true
			,listeners: {
				toggle: 'onRepeat'
			}
		}
		,{
			 xtype: 'tbfill'
		}
		,{
			 iconCls: 'fa fa-volume-down'
			,baseCls: ''
			,handler: 'onVolumeMute'
		}
		,{
			 xtype: 'slider'
			,id: 'volumeSlider'
			,width: 100
			,value: 100
			,listeners: {
				change: 'onVolumeChanged'
			}
		}
		,{
			 iconCls: 'fa fa-volume-up'
			,baseCls: ''
			,handler: 'onVolumeAll'
		}
		/*
		,{
			 xtype: 'panel'
			,title: 'MÚSICA RELACIONADA'
			,width: '100%'
			,flex: 1
			,layout: 'fit'
			,margin: '10 0 0 0'
			,items: [
				{
					 xtype: 'dataview'
					,itemId: 'relatedSongs'
					,cls: 'relatedSongs'
					,tpl: [
						'<tpl for=".">',
							'<div class="related">',
								'<div class="songtitle">{title}</div>',
								'<div class="artistname">{artist_name}</div>',
							'</div>',
						'</tpl>'
					]
					,itemSelector: 'div.related'
					,emptyText: 'No related songs available...'
					,store: {
						 type: 'player-related'
					}
					,scrollable: 'vertical'
					,listeners: {
						itemdblclick: 'onRelatedDblClick'
					}
				}
			]
		}
		*/
	]
});
