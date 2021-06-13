'use strict';
const rescueSearch = document.getElementById('runSearch');
const rescueResults = document.getElementById("rescueResults");

document.addEventListener('DOMContentLoaded', function () {
    
/*  // gets geolocation data in the form of Lat/Longs
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            rescueResults.innerText = "Geolocation is not supported by this browser.";
        }
    };

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
    };
    getLocation();
    showPosition(); */
});

rescueSearch.addEventListener('click', function () {
    const zipInput = document.getElementById('zipcodeTxt').value;

    console.log(zipInput);

    //petfinder API fetch request
    //petfinder recommends cURL - which I've converted to a fetch request
    //function fetchPetfinder concats 2 fetch requests
    //API STRUCTURE --> https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
    function fetchPetfinder() {
        //original fetch simply gets an access token which is used to query API
        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=a6aW5mbZxRLDgezrGMZ3LaWex03veHxBtdQ4UQLik4eaglpe7J&client_secret=1pWWaeAFcUdR70TfuVn08wSv6cD283kXec6wJLXq",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            //console.log('token ', data);
            return fetch(`https://api.petfinder.com/v2/animals?type=dog&location=${zipInput}&distance=10`, {
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