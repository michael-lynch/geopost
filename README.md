# Get a Postal Code Based on Your Current Location

A simple, lightweight jQuery plugin to generate a random postal code based on your current location.

This plugin uses the <a href="http://www.w3schools.com/html/html5_geolocation.asp" target="_blank">HTML5 Geolocation API</a> and the <a href="https://developers.google.com/maps/documentation/geocoding/" target="_blank">Google Geocoding API</a>.

<em>* Note that Safari currently only supports the HTML5 Gelocation API while on wifi. (<a href="http://stackoverflow.com/questions/3791442/geolocation-in-safari-5" target="_blank">source</a>)</em>

<a href="http://michael-lynch.github.io/get-postal-code-in-current-location/" target="_blank">See a demo</a>

##Instructions

Include jQuery, the Google Geocoding API and the plugin the head or footer of your page. 

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    
    <script src="/js/plugins/getPostalCode.js"></script>
    
Create an anchor, submit input or button to trigger the lookup and an input, div or span to contain the postal code that is returned. 

The below example uses a submit button to trigger the lookup and an input to display the returned postal code.

    <form>

		<label for="postal-code">Enter your postal code:</label>

		<input type="text" id="postal-code" />

		<input type="submit" value="Use My Current Location" id="geo-lookup" />

	</form>
	
Initialize the plugin targeting the class, ID or element that will trigger the lookup.

	$('#geo-lookup').getPostalCode();

####Options

<ol>

<li>postalCodeTarget: "id"
<br />A string that defines the ID of the element that will display the returned postal code (default: 'postal-code').

</ol>

#####Example

	$(function() {
	
		$('#geo-lookup').getPostalCode({
			postalCodeTarget: 'my-postal-code'
		});
	
	});