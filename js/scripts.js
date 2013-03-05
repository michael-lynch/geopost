/*

Name: Get a Postal Code Based on Your Location
Dependencies: jQuery, HTML5
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: March 4, 2013

*/

//GET POSTAL CODE BASED ON YOUR LOCATION

$(function() {

	var geocoder;
	var latlng;
	var postal;
	
	var getLatLng = function() {
				
		//if geo location is supported
		if (navigator.geolocation) {
		
			//get current position and pass the results to getPostalCode or time out after 5 seconds if it fails
			navigator.geolocation.getCurrentPosition(getPostalCode, geoLocationError, {timeout:5000});
			
		} else {
		
			//geolocation isn't supported
			alert('Your browser does not support Geo Location.');
		}
	
	};
	
	function geoLocationError() {
		
		alert('Geo Location failed.');
		
	}

	function getPostalCode(position) {
	
		//define new geocoder object
    	geocoder = new google.maps.Geocoder();
    	
    	//define lat and long
    	latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    	
    	//geocode the lat and long
    	geocoder.geocode({
    		'latLng': latlng
    	}, function(results, status) {
	    
	    	//if status is OK
	    	if(status == google.maps.GeocoderStatus.OK) {
		    	
		    	//for each result
				$.each(results, function(i) {
					
					//if type is postal_code
					if(this.types[0] == "postal_code") {
					
						//define postal code as long_name value
						postal = this['address_components'][0]['long_name'];

						//if postal code is greater than 3 characters
						if(postal.length > 3) {
						
							//place postal code inside text input
							$('.postal-code').val(postal);
							
							return false;
						}
					}
				});
	    	
	    	}
	    	
	    });

    }
    
    //init geo lookup
	$('.geo-lookup').click(function(e) {
	
		e.preventDefault();
	
		getLatLng();
		
	});
	
});