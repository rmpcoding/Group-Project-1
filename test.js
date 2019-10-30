var apiKey = "Y8vTljiG";
var queryUrl = "https://api.rescuegroups.org/http/v2.json";

// male/female
// dog/cat
// radius
// zipcode

var dataObject = {
  apikey: "Y8vTljiG",
  objectType: "animals",
  objectAction: "publicSearch",
  search: {
    calcFoundRows: "Yes",
    resultStart: 0,
    resultLimit: 20,
    resultSort: "animalID",
    fields: [
      "animalID",
      "animalOrgID",
      "animalName",
      "animalSpecies",
      "animalBreed",
      "animalThumbnailUrl"
    ],
    filters: [
      {
        fieldName: "animalStatus",
        operation: "equals",
        criteria: "Available"
      }
    ]
  }
};

var dog = "dog"; // will ultimately erase and use dropDownAnimal
var cat = "cat"; // will ultimately erase and use dropDownAnimal
var dropDownAnimal = ""; // push dropdown value (dog or cat) into the variable

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
      "animalThumbnailUrl"
    ],
    filters: [
      { fieldName: "animalSpecies", 
        operation: "equals", 
        criteria: dog },
      {
        fieldName: "animalStatus",
        operation: "equals",
        criteria: "Available"
      }
    ]
  }
};

// test section
// { fieldName: "animalSpecies",
//   operation: "equals",
//   criteria: cat
// }
// { fieldName: "orgLocationDistance",
//   operation: "radius",
//   criteria: 90 },
//  { fieldName: "orgLocation",
//     operation: "equals",
//     locationPostalcode: 90210 }

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
