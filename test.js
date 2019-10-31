$(".btnSearch").on("click", searchVar)

function searchVar() {
  //define variables
  var animal = $(".animale").val()
  var sex = $(".sexe").val()
  var zip = $(".zipee").val()
  var distance = $(".distancee").val()
  var petZip;

  //beginning of rescuegroup API
  var apiKey = "Y8vTljiG";
  var queryUrl = "https://api.rescuegroups.org/http/v2.json";

  //Rescue Groups API filters
  var apiObject = {
    apikey: "Y8vTljiG",
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 10,
      resultSort: "animalID",
      resultOrder: "asc",
      calcFoundRows: "Yes",
      fields: [
        "animalID",
        "animalOrgID",
        "animalName",
        "animalSpecies",
        "animalBreed",
        "animalUrl",
        "animalSex",
        "animalLocation",
        "animalLocationCitystate",
        "animalGeneralAge",
        "animalPictures"
      ],
      filters: [
        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: animal
        },
        {
          fieldName: "animalStatus",
          operation: "equals",
          criteria: "Available"
        },
        {
          fieldName: "animalSex",
          operation: "equals",
          criteria: sex
        },
        {
          fieldName: "animalLocation",
          operation: "equals",
          criteria: zip
        },
        {
          fieldName: "animalLocationDistance",
          operation: "radius",
          criteria: distance
        }
      ]
    }
  };

//AJAX call to retrieve JSON from RescueGroups API
  var data = JSON.stringify(apiObject);

  var url = `https://cors-anywhere.herokuapp.com/https://api.rescuegroups.org/http/v2.json/`;

  $.ajax({
    url: url,
    method: "POST",
    data
//Pushing API data to the HTML & retrieving pet zipcode
  }).then(function (response) {
    var petValues = Object.values(response.data)
    petZip = petValues[0].animalLocation
    var photo = petValues[0].animalPictures[0].urlSecureFullsize
    var breed = petValues[0].animalBreed
    var city = petValues[0].animalLocationCitystate
    var name = petValues[0].animalName
    var sex = petValues[0].animalSex
    $(".petImg").append(`<img src="${photo}">`)
    $(".name").html(name)
    $(".anBreed").html("Breed: " + breed)
    $(".anCity").html("City: " + city)
    $(".anLocation").html("Location: " + petZip)
    $(".anSex").html("Sex: " + sex)
    zipcodeConverter();
    console.log(petZip);
  });

//Beginning of zipcode converting API
  var apiZipKey = "xuJXW9n14NfvKNEH2vMeXEL5yW5zQSCCzdRPdKcW5yT2y03dZUY54aaWGRBxkoke";
  var apiZipcodeUrl = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/";

  var latitude;
  var longitude;

//Converting pet zipcode to be lat/long coordinates
  function zipcodeConverter() {
    var zipBuild = apiZipcodeUrl + apiZipKey + "/info.json/" + petZip + "/degrees";
    $.ajax({
      url: zipBuild,
      method: "GET"
    }).then(function (response) {
      latitude = response.lat
      longitude = response.lng

      console.log(latitude, longitude)
    });
  };

  var queryUrl = "https://cors-anywhere.herokuapp.com/https://api.openstreetmap.org/";
  
      $.ajax({
          url: queryUrl,
          method: "GET"
        }).then(function (response) {
              console.log(response);
          
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


}
