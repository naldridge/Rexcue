"use strict";

// Show Breed pictures ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showBreeds(data) {
    console.log(data, 'inside show breeds')
 const image = document.createElement('img')
  image.src = data.message;
  console.log(image)

const container= document.querySelector('#container2')
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
});
