Ext.define('OpenMusic.util.Player', {
	 singleton: true
	
	,player: null
	,currentSong: null
	
	,playAll: false
	,shuffle: false
	,repeat: false
	
	,launch: function() {
		var me = this;
		
		me.player = new YT.Player('playerframe', {
			 height: '1'
			,width: '1'
			,playerVars: {
				 controls: 0
				,disablekb: 1
				,fs: 1
				,iv_load_policy: 3
				,rel: 0
				,showinfo: 0
				,enablejsapi: 1
			}
			,events: {
				 'onReady': onPlayerReady
				,'onStateChange': onPlayerStateChange
			}
		});
		
		function onPlayerReady(event) {
			console.log('YouTube Player - Ready', event);
		}
		
		/*
		 *
		 * Muestra el estado del reproductor. Los valores posibles son:
		 *	-1 - unstarted (sin empezar)
		 *	0 - ended (terminado)
		 *	1 - playing (en reproducción)
		 *	2 - paused (en pausa)
		 *	3 - buffering (almacenando en búfer)
		 *	5 - video cued (video en fila)
		 *
		 */
		  
		var interval;
		function onPlayerStateChange(event) {
			console.log('YouTube Player - State Change', event);
			if ( event.data === 1 ) { //Playing
				Ext.getCmp('player').down('#playPause').setPressed(true);
				interval = setInterval(me.updateProgress, 1000);
				Ext.getCmp('progressBar').down('slider').setMaxValue(me.player.getDuration());
				Ext.getCmp('player').down('#cover').setData({
					 thumb: 'https://i.ytimg.com/vi/'+me.player.getVideoData().video_id+'/mqdefault.jpg'
					,song_title: Ext.String.trim(me.player.getVideoData().title.split('-')[1])
					,artist_name: Ext.String.trim(me.player.getVideoData().title.split('-')[0])
				});
				//Ext.getCmp('player').down('#times #total').setText(me.prettySeconds(me.player.getDuration()));
				//me.getRelatedSongs(Ext.String.trim(me.player.getVideoData().title.split('-')[0]));
			} else if ( event.data === 0 && me.playAll ) {
				me.playAll();
			} else {
				Ext.getCmp('player').down('#playPause').setPressed(false);
				clearInterval(interval);
			}
		}
	}
	
	,loadSong: function(videoId) {
		var me = this;
		
		me.player.loadVideoById({
			 videoId: videoId
			,suggestedQuality: 'small'
		});
		
	}
	
	,getRandomSong: function() {
		var me = this;
		
		var song = Ext.first('queue').getStore().findRecord('played', false, Ext.Number.randomInt(0, Ext.first('queue').getStore().getCount()-1));
		
		if ( song.get('played') ) me.getRandomSong();
		return song;
	}
	
	,playAll: function() {
		var me = this;
		
		if ( me.shuffle ) {
			var song = me.getRandomSong();
			me.playSongByRecord(song);
		} else {
			var indexCurrSong = Ext.first('queue').getStore().indexOf(me.currentSong);
			var song = Ext.first('queue').getStore().getAt(indexCurrSong+1);
			if ( song ) me.playSongByRecord(song);
		}
	}
	
	,playSongByRecord: function(song) {
		var me = this;
		
		Ext.first('queue').getController().onSongDblClick(Ext.first('queue'), song);
	}
	
	,playSong: function(videoId) {
		var me = this;
		
		me.player.playVideo();
	}
	
	,pauseSong: function() {
		var me = this;
		
		me.player.pauseVideo();
	}
	
	,toggleSong: function() {
		var me = this;
		
		if ( me.player.getPlayerState() === 1 ) { // Playing
			me.player.pauseVideo();
		} else if ( me.player.getPlayerState() === 2 ) { // Paused
			me.player.playVideo();
		}
	}
	
	,prevSong: function() {
		var me = this;
		
		me.player.previousVideo();
	}
	
	,nextSong: function() {
		var me = this;
		
		//me.player.nextVideo();
		me.playAll();
	}
	
	,shufflePlay: function(pressed) {
		var me = this;
		
		me.shuffle = pressed;
	}
	
	,repeatPlay: function(pressed) {
		var me = this;
		
		me.repeat = pressed;
	}
	
	,loadPlaylist: function(playlistId) {
		var me = this;
		
		me.player.loadPlaylist({
			 list: playlistId
			,listType: 'playlist'
			,suggestedQuality: 'small'
		});
	}
	
	,playVideoAt: function(index) {
		var me = this;
		
		me.player.playVideoAt(index);
	}
	
	,updateProgress: function() {
		var me = this;
		
		Ext.getCmp('progressBar').down('progressbar').setValue(((OpenMusic.util.Player.player.getCurrentTime()*100)/OpenMusic.util.Player.player.getDuration())*0.01);
		//Ext.getCmp('player').down('#times #current').setText(OpenMusic.util.Player.prettySeconds(OpenMusic.util.Player.player.getCurrentTime()));
		if ( Ext.getCmp('progressBar').down('slider').allowAutoUpdate ) {
			Ext.getCmp('progressBar').down('slider').suspendEvent('change');
			Ext.getCmp('progressBar').down('slider').setValue(OpenMusic.util.Player.player.getCurrentTime(), true);
			Ext.getCmp('progressBar').down('slider').resumeEvent('change');
		}
	}
	
	,prettySeconds: function(seconds) {
		var s = Ext.Date.clearTime(new Date());
		s.setSeconds(seconds);
		return Ext.Date.format(s, 'i:s');
	}
	
	,getRelatedSongs: function(artist) {
		var me = this;
		
		Ext.getCmp('player').down('#relatedSongs').getStore().getProxy().setExtraParams({
			 api_key: '4B83VBZ1TZJHCZJLG'
			,format: 'json'
			,results: 10
			,type: 'artist-radio'
			,artist: artist
		});
		Ext.getCmp('player').down('#relatedSongs').getStore().load();
	}
});
