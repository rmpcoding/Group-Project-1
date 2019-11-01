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
  //understood this is for one animal - need to make this loop through all modals
  for (let i = 0; i < 10; i++) {
  petZip = petValues[i].animalLocation
  let photoUrl = petValues[i].animalPictures[0].urlSecureFullsize
  var breed = petValues[i].animalBreed
  var city = petValues[i].animalLocationCitystate
  var name = petValues[i].animalName
  var sex = petValues[i].animalSex

  var photo = $(`<img src="${photoUrl}">`)
  console.log(photoUrl)
  var a = $(`.${i}`);

    a.html(name)
    a.append(photo)
    $(".anBreed").html("Breed: " + breed)
    $(".anCity").html("City: " + city)
    $(".anLocation").html("Location: " + petZip)
    $(".anSex").html("Sex: " + sex)   
  }
  zipcodeConverter();
  console.log(petZip);
});

//Beginning of zipcode converting API
  var apiZipKey = "xuJXW9n14NfvKNEH2vMeXEL5yW5zQSCCzdRPdKcW5yT2y03dZUY54aaWGRBxkoke";
  var apiZipcodeUrl = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/";

  var latitude;
  var longitude;

//Converting pet zipcode to be lat/long coordinates through second Zip Code API
  function zipcodeConverter() {
    var zipBuild = apiZipcodeUrl + apiZipKey + "/info.json/" + petZip + "/degrees";
    $.ajax({
      url: zipBuild,
      method: "GET"
    }).then(function (response) {
      latitude = response.lat
      longitude = response.lng
      mapMarker();
      console.log(latitude, longitude)
    });
  };

  //taking coordinates and running through third map API to identify marker
  var mapQueryUrl = "https://cors-anywhere.herokuapp.com/https://api.openstreetmap.org/";
  function mapMarker() {
      $.ajax({
          url: mapQueryUrl,
          method: "GET"
        }).then(function (response) {
            var element = document.getElementById('map');
            element.style = "height:200px;";
            var map = L.map(element);
            L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
          
            var target = L.latLng(latitude, longitude);
            map.setView(target, 7);
            L.marker(target).addTo(map);
        });
      };
};