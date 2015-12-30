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
	]

	,controller: 'info-main'
	,viewModel: {
		type: 'info-main'
	}
	
	,html: 'asdasdasdasd'
	,collapsible: true
	,collapsed: true
	,header: false
	,split: true
	,title: 'Info'
	,collapseMode: 'mini'
	//,hideMode: 'offsets'
	,width: '80%'
});
