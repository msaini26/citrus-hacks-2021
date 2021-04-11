let map, infoWindow, pos;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.708798069958842, lng: -80.05345306633264},
        zoom: 18,
    });

    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
        }
    });

    function mapLocation() {
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
      
        function initialize() {
          directionsDisplay = new google.maps.DirectionsRenderer();
          directionsDisplay.setMap(map);
          google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute);
        }
      
        function calcRoute() {
          var start = pos;
          var end = new google.maps.LatLng(26.70934795606039, -80.05387819645473);
          var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
          };
          directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
              directionsDisplay.setMap(map);
            } else {
              alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
          });
        }
      
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    mapLocation();
}

//var filename = "file:///C:/Users/patri/OneDrive/Documents/GoogleMapsGooglePlaces/gadm36_USA_2.kml";

function parseDocument(file) {
    var fileReader = new FileReader();
    fileReader.onload = async (e) => {
        var result = await this.extractGoogleCoords(e.target.result);
    }
    fileReader.readAsText(file);
}

function extractGoogleCoords(plainText) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(plainText, "text/xml");
    var googlePolygons = [];
    //var googleMarkers = [];

    if(xmlDoc.documentElement.nodeName == "kml") {
        for(const item of xmlDoc.getElementsByTagName('Placemark')) {
            var placeMarkName = item.getElementsByClassName('NAME_2');
            var polygons = item.getElementsByTagName('Polygon');

            // POLYGONS PARSE
            for(const polygon of polygons) {
                var coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                var points = coords.split(" ");

                var googlePolygonsPaths = [];
                for(const point of points) {
                    coord = point.split(",");
                    googlePolygonsPaths.push({lat: +coord[1], lng: +coord[0]});
                }
            }
        }
    } else {
        throw 'error while parsing!';
    }
    return {polygons: googlePolygons};
}

//var polygons = parseDocument(filename);

function isLatLngInZone(latLngs, lat, lng) {
    vertices_y = new Array(); vertices_x = new Array();
    longitude_x = lng; latitude_y = lat;
    latLngs = JSON.parse(latLngs);

    var r, i, j, c, point = 0;
    for(r = 0; r < latLngs.length; r++) {
        vertices_y.push(latLngs[r].lat);
        vertices_x.push(latLngs[r].lng);
    }
    points_polygon = vertices_x.length;
    for(i = 0, j = points_polygon; i < points_polygon; j = i++) {
        point = i;
        if(point == points_polygon) {
            point = 0;
        }
        if ( ((vertices_y[point]  >  latitude_y != (vertices_y[j] > latitude_y)) && (longitude_x < (vertices_x[j] - vertices_x[point]) * (latitude_y - vertices_y[point]) / (vertices_y[j] - vertices_y[point]) + vertices_x[point]) ) ) {
            c = !c;
        }
    }
    return c; // 0 equals false and 1 equals true
}

//let neighborhood_boundaries;

//console.log("hello world");
//console.log(polygons);

/*polygons.array.forEach(element => {
    if(isLatLngInZone(element, pos.lat, pos.lng)) {
        neighborhood_boundaries = element;
        break;
    }
});*/

// Uses the Data layer to create a polygon 
/*map.data.add({
    geometry: new google.maps.Data.Polygon([
        neighborhood_boundaries,
    ]),
});*/


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}
