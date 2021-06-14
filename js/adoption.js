'use strict';
const rescueSearch = document.getElementById('runSearch');
const rescueResults = document.getElementById("rescueResults");


document.addEventListener('DOMContentLoaded', function () {

    /* 
    // gets geolocation data in the form of Lat/Longs
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            rescueResults.innerText = "Geolocation is not supported by this browser.";
        }
    };

    function showPosition(position) {
        const calculatedLocation = "latitude=" + position.coords.latitude + "&" + "longitude=" + position.coords.longitude;
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude); 
        console.log(calculatedLocation);
        fetchPetfinder(calculatedLocation);
    };
    getLocation();
    showPosition();  */
});

rescueSearch.addEventListener('click', function () {
    const zipInput = document.getElementById('zipcodeTxt').value;
    const dogResults = document.getElementById('dogResults');


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
            console.log(data.pagination)
            //console.log(data.animals);
            //displayAdoptableDogs(data);
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

        /*  Object.keys(adoptableDogs).forEach(key => {
             console.log(key, adoptableDogs[key]);
         }); */




        adoptableDogs.forEach(function (element) {
            //create a temporary array for each object
            //specify which values to display
            //add values to dogDetails
            //const detailsArray = Object.entries(element);
            //const filteredDetailsArray = 
            let dogList = document.createElement('ul');
            const breed = Object.values(element.breeds.primary);
            
            const dogDetails = [element.name, breed, element.size];

            dogDetails.forEach(function(item){
                let detailsLi = document.createElement('li');

                detailsLi.innerText = item;
                dogList.appendChild(detailsLi);
            });
            dogResults.appendChild(dogList);           


            /* const dogDetails = document.createElement('li');
            const detailsString = JSON.stringify(element, null, 4);
            
 
            console.log(detailsArray);
 
            dogResults.appendChild(dogDetails);
            dogDetails.innerText = detailsString;
            console.log("li :", dogDetails);  */
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

    const container = document.querySelector('#adoptDog1')
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