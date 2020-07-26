function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 51.409860,
            lng: -2.542751
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.409715, lng: -2.542628 },
        { lat: 51.409478, lng: -2.511757 },
        { lat: 51.430001, lng: -2.538766 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
