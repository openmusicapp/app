/**
 * This is the main view when the user want to search for something
 */
Ext.define('OpenMusic.view.queue.Main', {
	 extend: 'Ext.grid.Panel'
	,xtype: 'queue'
	,id: 'queue'
	
	,requires: [
		 'OpenMusic.view.queue.MainController'
		,'OpenMusic.view.queue.MainModel'
		,'OpenMusic.store.queue.Songs'
	]

	,controller: 'queue-main'
	,viewModel: {
		type: 'queue-main'
	}
	
	,padding: 20
	,bodyPadding: 0
	,store: {
		type: 'queue-songs'
	}
	,tbar: {
		 height: 100
		,items: [
			{
				 xtype: 'title'
				,text: 'Cola de reproducción'
				,height: 60
				,style: 'font-size: 40px;'
			}
		]
	}
	,emptyText: 'No songs queued...'
	,columns: [
		 {
			 dataIndex: 'status'
			,width: 30
			,sortable: false
			,menuDisabled: true
			,draggable: false
			,renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
				if ( value === 'playing' ) return '<img src="resources/playing.gif" alt="Playing" />';
				return '';
			}
		 }
		,{
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
});
