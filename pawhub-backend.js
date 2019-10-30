var queryUrl = ``;
var apiKey = "b2f634b8-1529-4758-9cf5-7ceeac32b0a9"; //rescuepets.org key
var search = "";


var addRequest = {
  token: token,
  tokenHash: hash,
  objectType: "animalBreeds",
  objectAction: "publicSearch",
  search:
  {
      resultsStart: "0",
      resultsLimit: "100",
      resultSort: "breedName",
      resultOrder: "asc",
      filters:
      [
          {
              fieldName: "breedSpecies",
              operation: "equals",
              criteria: "Cat"
          }
      ],

  filterProcessing: "1",
  fields:
  ["breedID", "breedName", "breedSpecies", "breedSpeciesID"]

  }
}
  //console.log(addRequest);
  

  let addarray = JSON.stringify(addRequest);
  let Response = await fetch(url, {
      "method": "post",
      "header": "Content-Type: application/json",
      "body": addarray
  })
  let json2 = await Response.json();
  let response2 = JSON.stringify(json2);
  let animalList = json2.data;



  // ___________


// this is the snippet code from their website:


var thing = {"apikey":apiKey,"objectType":"animals","objectAction":"publicSearch","search":{"calcFoundRows":"Yes","resultStart":0,"resultLimit":10,"fields":["animalName"],"filters":[{"fieldName":"animalStatus","operation":"equals","criteria":"Adopted"},{"fieldName":"animalOrgID","operation":"equals","criteria":"****"}]}};
var encoded = $.toJSON(thing)
 
$.ajax({
  url: "https://api.rescuegroups.org/http/json/?data=" + encoded, 
  dataType: "jsonp",
  success: function(data) {
        if (data.foundRows) document.getElementById('adoptedPetsCount').innerHTML = data.foundRows;
  },
  error: function(xhr, status, error) {
    console.log('error');
  }
});

