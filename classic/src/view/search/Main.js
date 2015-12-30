/**
 * This is the main view when the user want to search for something
 */
Ext.define('OpenMusic.view.search.Main', {
	 extend: 'Ext.container.Container'
	,xtype: 'search'
	
	,requires: [
		 'OpenMusic.view.search.MainController'
		,'OpenMusic.view.search.MainModel'
		,'OpenMusic.store.search.Artists'
		,'OpenMusic.store.search.Songs'
	]

	,controller: 'search-main'
	,viewModel: {
		type: 'search-main'
	}
	
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
		,{
			 xtype: 'panel'
			,title: 'Artistas'
			,hidden: true
			,height: 250
			,items: [
				{
					 xtype: 'dataview'
					,itemId: 'artists'
					,cls: 'artistsView'
					,height: 200
					,tpl: [
						 '<tpl for=".">'
							,'<div style="margin-bottom: 10px;" class="thumb-wrap">'
								,'<img src="{[this.getThumb(values.images)]}" />'
								,'<div>{name}</div>'
							,'</div>'
						,'</tpl>'
						,{
							getThumb: function(images) {
								console.log(images);
								if ( !Ext.isEmpty(images) ) return images[0].url;
								return 'resources/artist-portrait-a93084d838a02eb760ba7f96014c3fa6.png';
							}
						}
					]
					,store: {
						type: 'search-artists'
					}
					,itemSelector: 'div.thumb-wrap'
					,emptyText: 'No artists available'
				}
			]
		}
		,{
			 xtype: 'grid'
			,title: 'Canciones'
			,itemId: 'songs'
			,hidden: true
			,flex: 1
			,store: {
				type: 'search-songs'
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
			,listeners: {
				itemdblclick: 'onSongDblClick'
			}
		}
	]
});
