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

        console.log('Your current position is:');
        console.log(`Latitude : ${position.latitude}`);
        console.log(`Longitude: ${position.longitude}`);
        console.log(`More or less ${position.accuracy} meters.`);
      }
    
    getPos();
});

rescueSearch.addEventListener('click', function () {
    const zipInput = document.getElementById('zipcodeTxt').value;
    const dogResults = document.getElementById('dogResults');


    console.log("Zip: ", zipInput);

    //petfinder API fetch request
    //petfinder recommends cURL - which I've converted to a fetch request
    //function fetchPetfinder concats 2 fetch requests
    //API STRUCTURE --> https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
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
            console.log(data.pagination)
            //console.log(data.animals);
            return data.animals;
        }).then(function (animals) {
            console.log(animals);
            breakoutAdoptableDogs(animals);
        }).catch(function (error) {
            console.error("ERROR: ", error);
            return error;
        });
    };


    function breakoutAdoptableDogs(animals) {
        const adoptableDogs = animals;
        console.log("dogs to be rescued: ", adoptableDogs);


        let dogList = document.createElement('ul');
        adoptableDogs.forEach(function (element) {

            console.log("Element: ", element);

            //console.log("element is: ", element);
            let detailsLi = document.createElement('li');
            let imageLi = document.createElement('img');
            imageLi.src = element.primary_photo_cropped.medium;    

            detailsLi.innerText = `${element.name} ${element.breeds.primary} ${element.size} ${element.url}`;
            dogList.appendChild(imageLi);
            dogList.appendChild(detailsLi);

            dogResults.appendChild(dogList);

        });
    };

    fetchPetfinder();
});


// Show Breed pictures ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function showBreeds(data) {
    console.log(data, 'inside show breeds')
    const image = document.createElement('img')
    image.src = data.message;
    console.log(image)

    const container = document.querySelector('#adoptDog')
    container.append(image)
}

function showBreeds2(data) {
    console.log(data, 'inside show breeds')
    const image = document.createElement('img')
    image.src = data.message;
    console.log(image)

    const container = document.querySelector('#adoptDog2')
    container.append(image)
}

function showBreeds3(data) {
    console.log(data, 'inside show breeds')
    const image = document.createElement('img')
    image.src = data.message;
    console.log(image)

    const container = document.querySelector('#adoptDog3')
    container.append(image)
}

function showBreeds4(data) {
    console.log(data, 'inside show breeds')
    const image = document.createElement('img')
    image.src = data.message;
    console.log(image)

    const container = document.querySelector('#adoptDog4')
    container.append(image)
}

function showBreeds5(data) {
    console.log(data, 'inside show breeds')
    const image = document.createElement('img')
    image.src = data.message;
    console.log(image)

    const container = document.querySelector('#adoptDog5')
    container.append(image)
}

function showBreeds6(data) {
    console.log(data, 'inside show breeds')
    const image = document.createElement('img')
    image.src = data.message;
    console.log(image)

    const container = document.querySelector('#adoptDog6')
    container.append(image)
}



document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            showBreeds(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            showBreeds2(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            showBreeds3(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            showBreeds4(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            showBreeds5(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            showBreeds6(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });
});