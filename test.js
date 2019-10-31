var apiKey = "Y8vTljiG";
var queryUrl = "https://api.rescuegroups.org/http/v2.json";

var gender;
var animal = "dog";
var radius = 100;
var zipcode = 90210; 
var animalZipcode;

// test section
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
        criteria: "male" 
      },
      { 
        fieldName: "animalLocation",
        operation: "equals",
        criteria: zipcode 
      },
      { 
        fieldName: "animalLocationDistance",
        operation: "radius",
        criteria: 5 
      }
    ]
  }
};


var data = JSON.stringify(apiObject);

var url = `https://cors-anywhere.herokuapp.com/https://api.rescuegroups.org/http/v2.json/`;

$("#test-display").on("click", function() {
  $.ajax({
    url: url,
    method: "POST",
    data
  }).then(function(response) {
    var petValues = Object.values(response.data)
    var petLocation = petValues[0].animalLocation
    var photo = petValues[0].animalPictures[0].urlSecureFullsize
    var breed = petValues[0].animalBreed
    var city = petValues[0].animalLocationCitystate
    var name = petValues[0].animalName
    var sex = petValues[0].animalSex
    $('#photo').prepend(`<img src="${photo}">`)
    $("#name").html("Name: " + name)
    $("#breed").html("Breed: " + breed)
    $("#city").html("City: " + city)
    $("#location").html("Location: " + petLocation)
    $("#sex").html("Sex: " + sex)
    // need to add dummy link
    $("#url").html("URL: " + )

    console.log(response);
    console.log(photo);
  });
});


var apiZipKey = "xuJXW9n14NfvKNEH2vMeXEL5yW5zQSCCzdRPdKcW5yT2y03dZUY54aaWGRBxkoke";
// we need to get zip code that is same as petLocation from RescueGroups API
var apiZipZipcode = "90210";
var apiZipcodeUrl = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/";

var zipBuild = apiZipcodeUrl + apiZipKey + "/info.json/" + apiZipZipcode + "/degrees";

console.log(zipBuild);

var coordinates = {};

$("#test-display").on("click", function zipcodeConverter() {
  $.ajax({
    url: zipBuild,
    method: "GET"
  }).then(function(response) {
    var latitude = response.lat
    var longitude = response.lng
    coordinates.latitude = latitude
    coordinates.longitude = longitude

  });

});

