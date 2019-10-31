var apiKey = "Y8vTljiG";
var queryUrl = "https://api.rescuegroups.org/http/v2.json";

var gender;
var animal = "dog";
var radius = 100;
var zipcode = 90210; 
var animalZipcode;

// var dataObject = {
//   apikey: "Y8vTljiG",
//   objectType: "animals",
//   objectAction: "publicSearch",
//   search: {
//     calcFoundRows: "Yes",
//     resultStart: 0,
//     resultLimit: 20,
//     resultSort: "animalID",
//     fields: [
//       "animalID",
//       "animalOrgID",
//       "animalName",
//       "animalSpecies",
//       "animalBreed",
//       "animalThumbnailUrl",
//     ],
//     filters: [
//       {
//         fieldName: "animalStatus",
//         operation: "equals",
//         criteria: "Available"
//       }
//     ]
//   }
// };


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
      "animalThumbnailUrl",
      "animalSex",
      "animalLocation",
      "animalLocationCitystate",
      "animalGeneralAge"
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

// test section
// { fieldName: "animalSpecies",
//   operation: "equals",
//   criteria: cat
// }

var data = JSON.stringify(apiObject);

var url = `https://cors-anywhere.herokuapp.com/https://api.rescuegroups.org/http/v2.json/`;

$("#test-display").on("click", function() {
  $.ajax({
    url: url,
    method: "POST",
    data
  }).then(function(response) {
    var petValues = Object.values(response.data)
    console.log(response);
    console.log(petValues[0]);
  });
});


var apiZipKey = "xuJXW9n14NfvKNEH2vMeXEL5yW5zQSCCzdRPdKcW5yT2y03dZUY54aaWGRBxkoke";
var apiZipFormat = "json";
var apiZipZipcode = "90210";
var apiZipUnit = "degrees";

var apiZipcodeUrl = "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/";

var zipBuild = apiZipcodeUrl + apiZipKey + "/info." + apiZipFormat + "/" + apiZipZipcode + "/" + apiZipUnit;

console.log(zipBuild);



$("#test-display").on("click", function() {
  $.ajax({
    url: zipBuild,
    method: "GET"
  }).then(function(response) {

    console.log(response);

  });
});

