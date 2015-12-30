Ext.define('OpenMusic.view.explore.gm.Main',{
	 extend: 'Ext.panel.Panel'
	,xtype: 'exploreGM'
	
	,requires: [
		 'OpenMusic.view.explore.gm.MainController'
		,'OpenMusic.view.explore.gm.MainModel'
		,'OpenMusic.store.explore.GM'
		,'OpenMusic.store.explore.SGM'
	]

	,controller: 'explore-gm-main'
	,viewModel: {
		type: 'explore-gm-main'
	}

	,title: 'GÉNEROS Y ESTADOS DE ÁNIMO'
	,layout: 'card'
	,items: [
		{
			 xtype: 'dataview'
			,cls: 'gmView'
			,tpl: [
				'<tpl for=".">',
					'<div class="gm" style="background-image: url(resources/gm/{picture}.jpg)">',
						'{title}',
					'</div>',
				'</tpl>'
			]
			,itemSelector: 'div.gm'
			,emptyText: 'No genres and moods available...'
			,store: {
				type: 'explore-gm'
			}
			,scrollable: 'vertical'

			,listeners: {
				 itemmouseenter: 'onItemMouseEnter'
				,itemclick: 'onItemClick'
				,itemcontextmenu: 'onItemContextMenu'
			}
		}
		,{
			 xtype: 'grid'
			,cls: 'sgmView'
			,tbar: {
				 height: 100
				,items: [
					{
						 xtype: 'button'
						,scale: 'large'
						,iconCls: 'fa fa-angle-left'
						,handler: 'onBack'
					},
					{
						 xtype: 'title'
						,height: 60
						,style: 'font-size: 40px;'
					},'->',
					{
						 xtype: 'button'
						,scale: 'large'
						,text: 'Reproducir'
						,iconCls: 'fa fa-play'
						,handler: 'doPlayAll'
					},
					{
						 xtype: 'button'
						,scale: 'large'
						,text: 'Seguir'
						,iconCls: 'fa fa-eye'
						,enableToggle: true
						,disabled: true
					}
				]
			}
			,columns: [
				 {
					 text: 'CANCIÓN'
					,dataIndex: 'title'
					,flex: 1
					,sortable: false
					,menuDisabled: true
					,draggable: false
				 }
				,{
					 text: 'ARTISTA'
					,dataIndex: 'artist_name'
					,flex: 1
					,sortable: false
					,menuDisabled: true
					,draggable: false
					/*
					,renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
						if ( !Ext.isEmpty(record.get('artist_references')) ) return record.get('artist_references')[0].name;
						return '';
					}
					*/
				}
				,{
					 text: 'ALBUM'
					,flex: 1
					,sortable: false
					,menuDisabled: true
					,draggable: false
					,renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
						return '';
					}
				}
			]
			,emptyText: 'No songs available...'
			,store: {
				type: 'explore-sgm'
			}
			,scrollable: 'vertical'
			/*
			,listeners: {
				 itemmouseenter: 'onItemMouseEnter'
				,itemclick: 'onItemClick'
				,itemcontextmenu: 'onItemContextMenu'
			}
			*/
		}
	]
});
