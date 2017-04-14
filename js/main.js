(function(){
		
	var mapOptions = {
		mapTypeId:google.maps.MapTypeId.HYBRID//SATELLITE MODE (DEFAULT) 
 		 };

	var map = new google.maps.Map(document.querySelector('.mapCanvas'),mapOptions),
		preloader = document.querySelector('.preloader'),

		geocoder = new google.maps.Geocoder(),
		geocodeButton = document.querySelector('.geocode'),
		
		directionsService = new google.maps.DirectionsService(),
		directionsDisplay,
		locations = [],

		marker = new google.maps.Marker({
			position : new google.maps.LatLng(42.9833308, -81.25258070000001),//MARKER COORDINATES
			map: map,
			icon: 'http://benstuckless.ca/images/maps-and-flags.png'//ADDING CUSTOM MARKER
			
		});

	function initMap(position) {
		locations[0] = { lat: 42.9833308, lng: -81.25258070000001 };

		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map);

		map.setCenter({ lat: 42.9833308, lng: -81.25258070000001});

		map.setZoom(19);

		preloader.classList.add('hide-preloader');

	}

	function chartCourse() {
		var address = document.querySelector('.address').value;

		geocoder.geocode( {'address' : address}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {

				locations[1] = { lat: results[0].geometry.location.lat(), 
					lng: results[0].geometry.location.lng() };

				map.setCenter(results[0].geometry.location);

				if (marker) {
					marker.setMap(null);

					marker = new google.maps.Marker({
						map: map,
						position: results[0].geometry.location
					});
				}

				calcRoute(results[0].geometry.location);

			} else {
				console.log('Geocoder was not successful for the following reason: ' , status);
			}
		});
	}

	function calcRoute(codedLoc) {
		var request = {
			origin: locations[0],
			destination: locations[1],
			travelMode: 'DRIVING'
		};

		directionsService.route(request, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
			}
		});
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		// give some kind of error message to the user
		console.log('Your browser does not have geolocation');
	}

	function handleError(e) {
		console.log(e);
	}

	geocodeButton.addEventListener('click', chartCourse, false);

})();