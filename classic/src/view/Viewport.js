Ext.define('OpenMusic.view.Viewport', {
	 extend: 'Ext.Viewport'
	
	,requires: [
         'Ext.plugin.Viewport'
		,'OpenMusic.view.main.Main'
		,'OpenMusic.view.player.Main'
		,'OpenMusic.view.info.Main'
    ]
	
	,layout: 'border'
	,items: [
		{
			 region: 'center'
			,xtype: 'app-main'
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
});
