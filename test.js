var apiKey = "Y8vTljiG";
var queryUrl = "https://api.rescuegroups.org/http/v2.json";


// male/female
// dog/cat
// radius
// zipcode


var data = {
  "apikey": apiKey,
  "objectType": "animals",
  "objectAction": "publicSearch",
  "search": {
    "calcFoundRows": "Yes",
    "resultStart": 0,
    "resultLimit": 20,
    "resultSort": "animalID",
    "fields": [
      "animalID",
      "animalOrgID",
      "animalName",
      "animalSpecies",
      "animalBreed",
      "animalThumbnailUrl"
    ],
    "filters": [
      {
        "fieldName": "animalStatus",
        "operation": "equals",
        "criteria": "Available"
      }
    ]
  }
};
console.log(data);

var string = JSON.stringify(data);
console.log(string);


$.ajax({
url: queryUrl,
method: "POST",
contentType: "JSON"
}).then(function (response) {
    console.log(response);
});

// 



var apiKey= "Y8vTljiG";
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

var data = JSON.stringify(dataObject);

var url = `https://cors-anywhere.herokuapp.com/https://api.rescuegroups.org/http/v2.json/`;

$("#myButton").on("click", function() {
  $.ajax({
    url: url,
    method:"POST",
    data,
  }).then(function(response) {
    console.log(response);
    
  });
});
