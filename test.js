$(".btnSearch").on("click", searchVar)

function searchVar(){
//define variables
    var animal = $(".animale").val()
    var sex = $(".sexe").val()
    var zip = $(".zipee").val()
    var distance = $(".distancee").val()

    //beginning of rescuegroup API
var apiKey = "Y8vTljiG";
var queryUrl = "https://api.rescuegroups.org/http/v2.json";

//API filters
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

var data = JSON.stringify(apiObject);

var url = `https://cors-anywhere.herokuapp.com/https://api.rescuegroups.org/http/v2.json/`;

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
    $(".petImg").append(`<img src="${photo}">`)
    $(".name").html(name)
    $(".anBreed").html("Breed: " + breed)
    $(".anCity").html("City: " + city)
    $(".anLocation").html("Location: " + petLocation)
    $(".anSex").html("Sex: " + sex)

    

  });



var apiZipKey = "xuJXW9n14NfvKNEH2vMeXEL5yW5zQSCCzdRPdKcW5yT2y03dZUY54aaWGRBxkoke";
var apiZipcodeUrl = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/";

var zipBuild = apiZipcodeUrl + apiZipKey + "/info.json/" + zip + "/degrees";

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
}


