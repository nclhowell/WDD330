function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(42.7046, -121.9959),
        zoom: 14
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}