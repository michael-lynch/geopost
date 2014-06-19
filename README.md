#Geopost

A simple, lightweight jQuery plugin to generate a random postal code based on your current location.

This plugin uses the <a href="http://www.w3schools.com/html/html5_geolocation.asp" target="_blank">HTML5 Geolocation API</a> and the <a href="https://developers.google.com/maps/documentation/geocoding/" target="_blank">Google Geocoding API</a>.

<em>* Note that Safari currently only supports the HTML5 Gelocation API while on wifi. (<a href="http://stackoverflow.com/questions/3791442/geolocation-in-safari-5" target="_blank">source</a>)</em>

<a href="http://michael-lynch.github.io/geopost/" target="_blank">See a demo</a>

##Instructions

Include jQuery, the Google Geocoding API and the plugin in the head or footer of your page. 

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script src="//maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>

<script src="/js/plugins/geoPost.js"></script>
```
    
Create an anchor, submit input or button to trigger the lookup and an input, div or span to contain the postal code that is returned. 

The below example uses a submit button to trigger the lookup and an input to display the returned postal code.

```html
<form>

	<label for="postal-code">Enter your postal code:</label>

	<input type="text" id="postal-code" />

	<input type="submit" value="Use My Current Location" id="geo-lookup" />

</form>
```
	
Initialize the plugin targeting the class, ID or element that will trigger the lookup.

```js
$('#geo-lookup').geoPost();
```

####Options

<ol>

<li>postalCodeTarget: "id / class / element"
<br />A string that defines the class, ID or element that will display the returned postal code (default: 'postal-code').</li>

<li>success: function() {}
<br />A callback function that runs after the plugin has successfuly retrieved a postal code (default: function()).</li>

<li>error: function() {}
<br />A callback function that runs if there was an error retrieving a postal code (defaullt: function()).</li>

</ol>

#####Example

```js
$(function() {

	$('#geo-lookup').geoPost({
		postalCodeTarget: '#my-postal-code',
		success: function() {
			console.log('A postal code was successfully retrieved.');
		},
		error: function() {
			console.log('There was an error retrieving a postal code.');
		}
	});

});
```