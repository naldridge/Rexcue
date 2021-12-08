'use strict';
const rescueSearch = document.getElementById('runSearch');
const rescueResults = document.getElementById("rescueResults");


document.addEventListener('DOMContentLoaded', function () {
    
    // gets geolocation data in the form of Lat/Longs
    function getPos() {
        navigator.geolocation.getCurrentPosition(success);
    };

    function success(pos) {
        let position = pos.coords;

        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=GykKUK32gXAi6ZW7vjvuASjLEYEIgnlR2zEnwcmOkRLtScO8qe&client_secret=NkKcXUHK3ecDvYSYSEgNcArjwkFh9JbU57EbZr7G",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            //console.log('token ', data);
            return fetch(`https://api.petfinder.com/v2/animals?type=dog&location=${position.latitude},${position.longitude}&distance=10`, {
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
            //console.log(data.pagination)
            //console.log(data.animals);
            return data.animals;
        }).then(function (animals) {
            //console.log(animals);
            breakoutAdoptableDogs(animals);
        }).catch(function (error) {
            console.error("ERROR: ", error);
            return error;
        });
      }
    
    getPos();
});

function breakoutAdoptableDogs(animals) {
    const adoptableDogs = animals;
    const dogResults = document.getElementById('dogResults');

    let dogList = document.createElement('ul');
    adoptableDogs.forEach(function (element) {

        //console.log("element is: ", element);
        let adoptCard = document.createElement('li');
        let nameLi = document.createElement('li');
        let detailsLi = document.createElement('li');
        let imageLi = document.createElement('img');
        let linkEl = document.createElement('a');

        imageLi.src = element.primary_photo_cropped.medium;
        linkEl.setAttribute('href', element.url);
        linkEl.innerText = "Click to See Profile";

        nameLi.innerText = `${element.name}`;
        detailsLi.innerText = `${element.breeds.primary}, Size: ${element.size}`;

        adoptCard.appendChild(nameLi);
        adoptCard.appendChild(imageLi);
        adoptCard.appendChild(detailsLi);
        adoptCard.appendChild(linkEl);
        adoptCard.className = 'adoptCard';

        dogList.appendChild(adoptCard);

        dogResults.appendChild(dogList);


    });
};

function clearadoptUl() {
    const dogResults = document.getElementById('dogResults');

    while(dogResults.firstChild) dogResults.removeChild(dogResults.firstChild);
};

rescueSearch.addEventListener('click', function () {
    const zipInput = document.getElementById('zipcodeTxt').value;


    function fetchPetfinder() {
        //original fetch simply gets an access token which is used to query API
        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id=GykKUK32gXAi6ZW7vjvuASjLEYEIgnlR2zEnwcmOkRLtScO8qe&client_secret=NkKcXUHK3ecDvYSYSEgNcArjwkFh9JbU57EbZr7G",
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
            //console.log(data.pagination)
            //console.log(data.animals);
            return data.animals;
        }).then(function (animals) {
            //console.log(animals);
            breakoutAdoptableDogs(animals);
        }).catch(function (error) {
            console.error("ERROR: ", error);
            return error;
        });
    };

    
    clearadoptUl();
    fetchPetfinder();
});