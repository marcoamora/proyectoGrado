//inicializacion del mapa
/**function initMap(){
  var map = new google.maps.Map(document.getElementById("map"),{
	center:{lat:6.55059, lng:-73.136742},
	zoom: 14
    });
}*/
$("#map").geomap({
  center: [ lat:6.55059, lng:-73.136742],
  zoom: 14
});
