/**
 * This is the main view when the user want to search for something
 */
Ext.define('OpenMusic.view.taste.Main', {
	 extend: 'Ext.panel.Panel'
	,xtype: 'taste'
	
	,requires: [
		 'OpenMusic.view.taste.MainController'
		,'OpenMusic.view.taste.MainModel'
		,'OpenMusic.store.Genres'
		,'Ext.ux.form.ItemSelector'
	]

	,controller: 'taste-main'
	,viewModel: {
		type: 'taste-main'
	}
	
	,layout: 'card'
	,style: 'background-image: url("http://tympanus.net/Tutorials/ShazamButtonEffect/img/bg.png");'
	,bodyStyle: 'background: transparent;'
	,defaults: {
		 bodyPadding: 20
		,bodyStyle: 'background: transparent;'
	}
	,tbar: {
		 height: 100
		,items: [
			{
				 xtype: 'title'
				,text: 'Veamos tus gustos... ;)'
				,height: 60
				,style: 'font-size: 40px;'
			}
		]
	}
	,bbar: [
		{
			 text: 'Previous'
			,iconCls: 'fa fa-angle-left'
			,scale: 'large'
			,handler: 'showPrev'
		}
		,'->'
		,{
			 text: 'Next'
			,iconCls: 'fa fa-angle-right'
			,iconAlign: 'right'
			,scale: 'large'
			,handler: 'showNext'
		}
	]
	,items: [
		{
			 xtype: 'form'
			,items: [
				{
					 xtype: 'itemselector'
					,anchor: '100%'
					,height: 500
					,displayField: 'name'
					,valueField: 'name'
					,allowBlank: false
					,fromTitle: 'Genres'
					,toTitle: 'Likes'
					,queryMode: 'local'
					,store: {
						type: 'genres'
					}
					,targetCls: ''
				}
				,{
					 xtype: 'textfield'
					,emptyText: 'Search...'
					,listeners: {
						change: 'doGenreFilter'
					}
				}
			]
		}
		,{
			html: 'asdasd'
		}
	]
});
