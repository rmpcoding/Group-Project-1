$(document).ready(function () {
  var queryUrl = "https://cors-anywhere.herokuapp.com/https://api.openstreetmap.org/";
  
      $.ajax({
          url: queryUrl,
          method: "GET"
        }).then(function (response) {
              console.log(response);
          
        });
      });

// Where you want to render the map.
var element = document.getElementById('map');
element.style = 'height:300px;';
var map = L.map(element);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('47.50737', '19.04611');
map.setView(target, 14);
L.marker(target).addTo(map);



