Ext.define('OpenMusic.util.Player', {
	 singleton: true
	
	,requires: [
		'Ext.Promise'
	]
	
	,player: null
	,currentSong: null
	
	,playAll: false
	,shuffle: Boolean(localStorage.getItem('userConfig-shuffle') === null ? false : localStorage.getItem('userConfig-shuffle'))
	,repeat: Boolean(localStorage.getItem('userConfig-repeat') === null ? false : localStorage.getItem('userConfig-repeat'))
	
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
			} else if ( event.data === -1 ) {
				me.player.setShuffle(me.shuffle);
				me.player.setLoop(me.repeat);
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
	
	,createPlaylistFromStore: function(autoPlay) {
		var me = this;
		
		var listSongs = [];
		var delay = 0;
		Ext.first('queue').getStore().each(function(song, index, total) {
			setTimeout(function() {
				me.searchVideo(song, index).then(function (content) {
					listSongs.push(content.id.videoId);
				});
			}, delay);
			delay = delay + 1000;
		});
		
		var check = setInterval(function() {
			if ( listSongs.length === Ext.first('queue').getStore().getCount() ) {
				console.log('entro', listSongs, autoPlay);
				me.player.loadPlaylist({
					 playlist: listSongs
					,listType: 'playlist'
					,suggestedQuality: 'small'
				});
				clearInterval(check);
			}
		}, 1000);
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
		
		me.player.nextVideo();
	}
	
	,shufflePlay: function(pressed) {
		var me = this;
		
		me.shuffle = pressed;
		me.player.setShuffle(pressed);
		localStorage.setItem('userConfig-shuffle', pressed);
	}
	
	,repeatPlay: function(pressed) {
		var me = this;
		
		me.repeat = pressed;
		me.player.setLoop(pressed);
		localStorage.setItem('userConfig-repeat', pressed);
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
	
	,searchVideo: function( song, index ) {
		var me = this;
		
		console.log('searchVideo', song);
		
		return new Ext.Promise(function (resolve, reject) {
			// Use the JavaScript client library to create a search.list() API call.
			var request = gapi.client.youtube.search.list({
				 part: 'snippet'
				,regionCode: 'US'
				,type: 'video'
				,videoCategoryId: 10 // Music
				,maxResults: 1
				,order: 'viewCount'
				,videoSyndicated: true
				,q: song.get('artist_name') + ' ' + song.get('title')
			});

			// Send the request to the API server,
			// and invoke onSearchRepsonse() with the response.
			request.execute(onSearchResponse);

			// Called automatically with the response of the YouTube API request.
			function onSearchResponse(response) {
				//me.player.loadPlaylist(response.result.items[0].id.videoId);
				resolve(response.result.items[0]);
			}
		});
	}
});
