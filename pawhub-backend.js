var queryUrl = `https://api.rescuegroups.org/http/json/?data=`; // https://api.rescuegroups.org/http/v2.json
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

console.log(adoptableDog);
console.log(encoded);

$.ajax({
  url: "https://api.rescuegroups.org/http/json/?data=" + encoded,
  dataType: "jsonp",
  success: function(data) {
    if (data.calcFoundRows)
      document.getElementById("test-Display").innerHTML = data.calcFoundRows;
  },
  error: function(xhr, status, error) {
    console.log("error");
  }
});

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