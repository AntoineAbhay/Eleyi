var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 6.12, lng: 1.21},
        zoom: 6,
        disableDefaultUI: true
    });

    var bounds = new google.maps.LatLngBounds();
    
    var destinationInput = document.getElementById('destination');
    var destinationAutocomplete= new google.maps.places.Autocomplete(destinationInput);

    var originInput = document.getElementById('origin');
    var originAutocomplete= new google.maps.places.Autocomplete(originInput);

    // Set the data fields to return when the user selects a place.
    destinationAutocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
    originAutocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);


    var originMarker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });

    var destinationMarker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });
        
    var markers = [originMarker, destinationMarker];

    originAutocomplete.addListener('place_changed', function(){ drawMarker(originAutocomplete, originMarker); });
    destinationAutocomplete.addListener('place_changed', function(){ drawMarker(destinationAutocomplete, destinationMarker); });


    function drawMarker(autocomplete, marker) {
    
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        bounds = map.getBounds();
        marker.setPosition(place.geometry.location);
        markers.forEach(marker => {
            if (marker.getPosition()) {
                bounds.extend(marker.getPosition());
            }
        });
        
        map.fitBounds(bounds);
        marker.setVisible(true);
    }
}
