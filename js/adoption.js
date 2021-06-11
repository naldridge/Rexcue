'use strict';


document.addEventListener('DOMContentLoaded', function () {

    //petfinder API fetch request
    //petfinder recommends cURL - which I've converted to a fetch request
    //function fetchPetfinder concats 2 fetch requests
    function fetchPetfinder() {
        //original fetch simply gets an access token which is used to query API
        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=a6aW5mbZxRLDgezrGMZ3LaWex03veHxBtdQ4UQLik4eaglpe7J&client_secret=1pWWaeAFcUdR70TfuVn08wSv6cD283kXec6wJLXq",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log('token ', data);
                return fetch("https://api.petfinder.com/v2/types/dog/breeds", {
                //second fetch request uses access token get API data
                    headers: {
                        Authorization: data.token_type + " " + data.access_token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }   
                });
            }).then(function (response) {
                // Return the API response as JSON
                return response.json();
            
            }).then(function (data) {
                // Log the pet data
                console.log(data);
            
            }).catch(function (error) {
                console.error("ERROR: ", error);
                return error;
            });
    };

    fetchPetfinder();
});