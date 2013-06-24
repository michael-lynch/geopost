# Get a Postal Code Based on Your Current Location

A simple jQuery script to generate a random postal code based on your current location.

This script uses the [HTML5 Geolocation API](http://www.w3schools.com/html/html5_geolocation.asp) and the [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/).

*Note that Safari currently only supports the HTML5 Gelocation API while on wifi.* ([source](http://stackoverflow.com/questions/3791442/geolocation-in-safari-5))

##Instructions

Include jQuery 1.9.0+, the Google Geocoding API and scripts.js in the head or footer of your page. 

Of course, you can copy the contents of scripts.js into your own .js file. Just be sure to load the DOM before executing the script (visit [the jQuery documentation](http://learn.jquery.com/using-jquery-core/document-ready/) if you are unfamiliar with how to do that).

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    
    <script type="text/javascript" src="/js/scripts.js"></script>
    
Create a button or anchor to trigger the lookup with the class "geo-lookup" and an input, div or span with a class "postal-code" to contain the postal code that is returned. The below example uses a submit button to trigger the lookup and an input to display the returned postal code.

    <form>

		<label for="postal-code">Enter your postal code:</label>

		<input type="text" class="postal-code" />

		<input type="submit" value="Use My Current Location" class="geo-lookup" />

	</form>

### For more information regarding these APIs go to:

http://www.w3schools.com/html/html5_geolocation.asp

https://developers.google.com/maps/documentation/geocoding/