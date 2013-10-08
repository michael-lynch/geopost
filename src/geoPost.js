/*!

Name: Geopost
Dependencies: jQuery, HTML5
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: March 4, 2013
Licensed under the MIT license

*/

;(function($) {

    $.fn.geoPost = function(options) {
    
    	//return if no element was bound
		//so chained events can continue
		if(!this.length) { 
			return this; 
		}

		//define default parameters
        var defaults = {
            postalCodeTarget: '#postal-code',
            success: function() {},
            error: function() {}
        }

        //define plugin
        var plugin = this;

        //define element
        var el = $(this);

        //define settings
        plugin.settings = {}
 
        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        //vars
        var geocoder;
		var latlng;
		var postal;
	
		//HTML5 geolocation
		var getLatLng = function() {
	
			//if geo location is supported
			if (navigator.geolocation) {
	
				//get current position and pass the results to getPostalCode or time out after 5 seconds if it fails
				navigator.geolocation.getCurrentPosition(getPostalCode, geoLocationError, {timeout:5000});
	
			} else {
			
				//run error callback function
				plugin.settings.error.call(this);
	
				//geo location isn't supported
				console.log('Your browser does not support Geo Location.');
			}
	
		};
	
		function geoLocationError() {
		
			//run error callback function
			plugin.settings.error.call(this);
	
			//geo location failed
			console.log('Geo Location failed.');
	
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
								$(plugin.settings.postalCodeTarget).val(postal);
								
								//run success callback function
								plugin.settings.success.call(this);
	
								return false;
							}
						}
					});
	
		    	}
	
		    });
	
	    }
	    
	     //init geo lookup
		$(this).click(function(e) {
	
			e.preventDefault();
	
			getLatLng();
	
		});

    }

})(jQuery);