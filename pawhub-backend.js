var queryUrl = ``;
var apiKey = "aHkqsjR1dKZWFLgP0Gi2UWDs6bxVPQbi3u8XZln7KlCQ34n6bL";
var secret = "Cwz6rXEhF4zlSmWitUGuPZiy6sHA5xNxKTTsKW5Z";

var pf = new petfinder.Client({apiKey: "my-api-key", secret: "my-api-secret"});

pf.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });

console.log(pf);