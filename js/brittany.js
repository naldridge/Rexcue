"use strict";

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