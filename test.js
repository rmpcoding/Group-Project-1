    var dataIn = $(".petImg").data("index")
    console.log(dataIn)


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

    // console.log(a)
    // could work to use to cycle through modals 
    
    // if (i===dataIn){ 
     a.html(name)
     a.append(photo)

      // $(".petImg").append(`<img src="${photoUrl}">`)


      
   
      $(".anBreed").html("Breed: " + breed)
      $(".anCity").html("City: " + city)
      $(".anLocation").html("Location: " + petZip)
      $(".anSex").html("Sex: " + sex)


      
    }

  //  }

      
    ///need to get the information to append to corresponding
    ///data-indexes
    
    // if  {
       

    //     $(".petImg").append(`<img src="${photo}">`)
    //     $(".name").html(name)
    //     $(".anBreed").html("Breed: " + breed)
    //     $(".anCity").html("City: " + city)
    //     $(".anLocation").html("Location: " + petZip)
    //     $(".anSex").html("Sex: " + sex)
    
    //   }
  // }

    zipcodeConverter();
    console.log(petZip);
    console.log(petValues);
  });



// }).then(function (response) {
  //   var petValues = Object.values(response.data)
  //   petZip = petValues[0].animalLocation
  //   var photo = petValues[0].animalPictures[0].urlSecureFullsize
    // var photo2 = petValues[1].animalPictures[0].urlSecureFullsize
    // var photo3 = petValues[2].animalPictures[0].urlSecureFullsize
    // var photo4 = petValues[3].animalPictures[0].urlSecureFullsize
    // var photo5 = petValues[4].animalPictures[0].urlSecureFullsize
    // var breed= petValues[0].animalBreed
    // var breed2 = petValues[1].animalBreed
    // var breed3 = petValues[2].animalBreed
    // var breed4 = petValues[3].animalBreed
    // var breed5 = petValues[4].animalBreed
    // var city = petValues[0].animalLocationCitystate
    // var name = petValues[0].animalName
    // var name2 = petValues[1].animalName
    // var name3 = petValues[2].animalName
    // var name4 = petValues[3].animalName
    // var name5 = petValues[4].animalName

    // var sex = petValues[0].animalSex
    // $(".petImg").append(`<img src="${photo}">`)
    // $(".petImg").append(`<img src="${photo}">`)
    // $(".petImg").append(`<img src="${photo}">`)
    // $(".petImg").append(`<img src="${photo}">`)
    // $(".petImg").append(`<img src="${photo}">`)

    // $(".name").html(name)
    // $(".name").html(name)
    // $(".name").html(name)
    // $(".name").html(name)
    // $(".name").html(name)


    // $(".anBreed").html("Breed: " + breed)
    // $(".anBreed").html("Breed: " + breed)
    // $(".anBreed").html("Breed: " + breed)
    // $(".anBreed").html("Breed: " + breed)
    // $(".anBreed").html("Breed: " + breed)

    // $(".anCity").html("City: " + city)
    // $(".anLocation").html("Location: " + petZip)
    // $(".anSex").html("Sex: " + sex)
    // console.log(photo1)

    // zipcodeConverter();
    // console.log(petZip);


    //  function appendCarousel (){

    //   var sliDer=$(".carousel-item, waves-effect, waves-light, btn, modal-trigger, petImg")
    //   //creation, set content, append
    //   for (var i=0; i<sliDer.length; i++){

    //     sliderGen=$("<a>")
    //     $()

    //     photo[i]
    //     breed[i]
    //     city[i]
    //     name[i]
    //     sex[i]


    //     console.log(photo)
    //     console.log(breed)
    //     console.log(city)
    //     console.log(name)
    //     console.log(sex)
    //     console.log(sliDer.length)
    //   }
    
    // }
    // appendCarousel()
    
  // });

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
// var element = document.getElementById('map');
// element.style = 'height:300px;';
// var map = L.map(element);
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// Target's GPS coordinates.
// var target = L.latLng('47.50737', '19.04611');
// map.setView(target, 14);
// L.marker(target).addTo(map);


}
