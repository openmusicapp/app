/**
 * This is the section that appears in the east when user clicks on artist name for example.
 */
Ext.define('OpenMusic.view.info.Main', {
	 extend: 'Ext.panel.Panel'
	,xtype: 'info'
	,id: 'info'
	
	,requires: [
		 'OpenMusic.view.info.MainController'
		,'OpenMusic.view.info.MainModel'
		,'OpenMusic.store.info.PlaylistSongs'
	]

	,controller: 'info-main'
	,viewModel: {
		type: 'info-main'
	}
	
	,collapsed: true
	,placeholder: { hidden: true }
	,collapseMode: 'mini'
	,collapsible: true
	,collapseFirst: false
	,header: false
	,split: false
	,resizable: false
	,width: '80%'
	,layout: 'card'
	
	,items: [
		{
			 xtype: 'grid'
			,itemId: 'playlistSongs'
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
				type: 'info-playlistsongs'
			}
			,scrollable: 'vertical'
		}
	]
});
