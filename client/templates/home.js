var url_s = "http://places.api.here.com/places/v1/discover/search?at=-7.3063696,-39.2946653&q=petrol-station&app_id=hG4gnJyrmlbNgGscL7Ki&app_code=h3XG36Nr4RgQOjymUTblJQ&pretty";
    
     HTTP.call("GET", url_s,function (err,result){

        console.log(JSON.parse(result.content).results.items);
        Session.set('places', JSON.parse(result.content).results.items);
        
});

Template.home.helpers({
 
  lat: function() { return Geolocation.latLng().lat; },
  lng: function(){ return Geolocation.latLng().lng;  },

    ListaTodosPostos: function(){

         return Session.get('places');
    }
	 
});

//mobileoilh5m1@gmail.com	
//oilmobileh4m1