Ext.define('OpenMusic.store.explore.GM', {
	 extend: 'Ext.data.Store'

	,alias: 'store.explore-gm'

	,fields: [
		 'title'
		,'picture'
		,'value'
		,'ytchannel'
	]
	
	,autoLoad: true
	,proxy: {
		 type: 'memory'
	}
	,data: [
		{
			 title: 'Felices Fiestas (falta)'
			,picture: 'holidays2015'
			,value: 'holidays'
		}
		,{
			 title: 'Año en Música (falta)'
			,picture: 'yearinmusic2015'
			,value: 'yearinmusic2015'
		}
		,{
			 title: 'Latina'
			,picture: 'latin'
			,value: 'latin'
		}
		,{
			 title: 'Estado de ánimo (falta)'
			,picture: 'mood'
			,value: 'mood'
		}
		,{
			 title: 'Party (falta)'
			,picture: 'party'
			,value: 'party'
		}
		,{
			 title: 'Pop'
			,picture: 'pop'
			,value: 'pop'
		}
		,{
			 title: 'Trending (falta)'
			,picture: 'trending'
			,value: 'trending'
		}
		,{
			 title: 'Concentración (falta)'
			,picture: 'genre'
			,value: 'genre'
		}
		,{
			 title: 'Rock'
			,picture: 'rock'
			,value: 'rock'
			,ytchannel: 'UCRZoK7sezr5KRjk7BBjmH6w'
		}
		,{
			 title: 'Indie/Alternativa'
			,picture: 'indie'
			,value: 'indie emo'
		}
		,{
			 title: 'Dance'
			,picture: 'edm'
			,value: 'edm'
		}
		,{
			 title: 'Relajación'
			,picture: 'chill'
			,value: 'chill-out'
		}
		,{
			 title: 'Para comer (falta)'
			,picture: 'dinner'
			,value: 'dinner'
		}
		,{
			 title: 'Para dormir'
			,picture: 'sleep'
			,value: 'sleep'
		}
		,{
			 title: 'Hip hop'
			,picture: 'hiphop'
			,value: 'hip hop'
		}
		,{
			 title: 'Ejercicio'
			,picture: 'workout'
			,value: 'workout'
		}
		,{
			 title: 'Rhythm and Blues'
			,picture: 'r-b'
			,value: 'r&b'
		}
		,{
			 title: 'Country'
			,picture: 'holidays2015'
			,value: 'holidays'
		}
		,{
			 title: 'Religioso (falta)'
			,picture: 'religious'
			,value: 'religious'
		}
		,{
			 title: 'Folk & Americana'
			,picture: 'folk'
			,value: 'folk'
		}
		,{
			 title: 'Metal'
			,picture: 'metal'
			,value: 'metal'
		}
		,{
			 title: 'Soul'
			,picture: 'soul'
			,value: 'soul'
		}
		,{
			 title: 'Viajes (falta)'
			,picture: 'travel'
			,value: 'travel'
		}
		,{
			 title: 'Décadas (falta)'
			,picture: 'decades'
			,value: 'decades'
		}
		,{
			 title: 'Jazz'
			,picture: 'jazz'
			,value: 'jazz'
		}
		,{
			 title: 'Blues'
			,picture: 'blues'
			,value: 'blues'
		}
		,{
			 title: 'Reggae'
			,picture: 'reggae'
			,value: 'reggae'
		}
		,{
			 title: 'Punk'
			,picture: 'punk'
			,value: 'punk'
		}
		,{
			 title: 'Romántica (falta)'
			,picture: 'romance'
			,value: 'romance'
		}
		,{
			 title: 'Funk'
			,picture: 'funk'
			,value: 'funk'
		}
		,{
			 title: 'Clásica'
			,picture: 'classical'
			,value: 'classical'
		}
		,{
			 title: 'Humor'
			,picture: 'comedy'
			,value: 'comedy'
		}
		,{
			 title: 'Infantil'
			,picture: 'kids'
			,value: "children's music"
		}
	]
});
