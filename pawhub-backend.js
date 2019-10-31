<<<<<<< HEAD
var queryUrl = `https://api.rescuegroups.org/http/v2.json`; // https://api.rescuegroups.org/http/v2.json
var apiKey = "Y8vTljiG"; //rescuepets.org key
var search = "";

// // publicSearch filter
// filters: [
//   { fieldName: "animalStatus", operation: "equal", criteria: "Available" },
//   { fieldName: "animalSpecies", operation: "equal", criteria: "dog" }
// ]

// // radius search filter. Filters 90 miles from 90210
// filters: [
//   { fieldName: "orgLocationDistance", operation: "radius", criteria: "90" },
//   { fieldName: "orgLocation", operation: "equals", criteria: "90210" }
// ]

// let addarray = JSON.stringify(addRequest);
// let Response = await fetch(url, {
//   method: "post",
//   header: "Content-Type: application/json",
//   body: addarray
// });
// let json2 = await Response.json();
// let response2 = JSON.stringify(json2);
// let animalList = json2.data;

// ___________

// this is the snippet code from their website:

var adoptableDog = {
  apikey: apiKey,
  objectType: "animals",
  objectAction: "publicSearch",
  search: {
    resultStart: 0,
    resultLimit: 10,
    resultSort: "animalID",
    resultOrder: "asc",
    calcFoundRows: "Yes",
    filters: [
      { fieldName: "orgLocationDistance", operation: "radius", criteria: "90" },
      { fieldName: "orgLocation", operation: "equals", criteria: "90210" }
    ]
  }
};
var encoded = $.toJSON(adoptableDog);

// console.log(adoptableDog);
// console.log(encoded);
// console.log(adoptableDog.apikey);

$.ajax({
  url: "https://api.rescuegroups.org" + adoptableDog,
  method: "POST"
}).then(
  function(response) {
    console.log(response);
  },
  function(response) {
    console.log('err ');
  }
);

// $.ajax({
//   url: "https://api.rescuegroups.org/http/json/?data=" + encoded,
//   dataType: "jsonp",
//   success: function(data) {
//     if (data.calcFoundRows)
//       document.getElementById("test-Display").innerHTML = data.calcFoundRows;
//   },
//   error: function(xhr, status, error) {
//     console.log("error");
//   }
// });

// var stringfy = JSON.stringify(addRequest);
// let Response = await fetch(url, {
//   method: "post",
//   header: "Content-Type: application/json",
//   body: stringify
// });
// var json2 = await Response.json();
// let response2 = JSON.stringify(json2);
// let animalList = json2.data;

// var testDisplay = document.getElementById("test-display");
// testDisplay.textContent =

// sample
// calcFoundRows: "Yes",
// resultStart: 0,
// resultLimit: 10,
// fields: ["animalName"],
// filters: [
//   { fieldName: "animalStatus", operation: "equals", criteria: "Adopted" },
//   { fieldName: "animalOrgID", operation: "equals", criteria: "****" }
// ]
=======
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
>>>>>>> 171acc3c422f66ede1a334de88c5273b179859ba
