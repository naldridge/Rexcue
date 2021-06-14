`use strict`

// Build breed list v1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function buildBreeds(data) {
//     const breedList = data.message;
//     const breedsContentEl = document.querySelector('.breedsContent');
//     console.log("breedList is: ", breedList);
//     const breedUl = document.createElement(`ul`);
//     Object.entries(breedList).forEach(function(breed) {
//         const breedItem = document.createElement(`p`);
//         breedItem.innerText = breed[0];
//         breedUl.appendChild(breedItem);
//         console.log(breed[0]);
//     });
//     breedsContentEl.append(breedUl)
// }


// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://dog.ceo/api/breeds/list/all')
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log("the data is: ", data);
//             console.log("the message is: ", data.message);
//             buildBreeds(data);

//         })
//         .catch(function(error) {
//             console.error("ERROR: ", error);
//             return error;
//         });

// fetch('https://dog.ceo/api/breeds/image/all')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         // console.log("the data is: ", data);
//         // console.log("the message is: ", data.message);
//         buildBreeds(data);

//     })
//     .catch(function(error) {
//         console.error("ERROR: ", error);
//         return error;
//     });


// });


// Build Breeds w/Pic Next To List~~~~~~~~~~~~~~~~~~~~~~~~~

const BASE_API_URL = `https://api.thedogapi.com/v1`


const fetchDoggoBreeds = async() => {

    const response = await fetch(BASE_API_URL + `/breeds`);
    const dogBreeds = await response.json();
    buildDoggoSelect(dogBreeds);

}


const buildDoggoSelect = (breeds) => {
    const select = document.querySelector(`.breedSelect`);
    const breedOptions = breeds.map(breed => {
        const option = document.createElement(`option`);
        option.text = breed.name;
        option.value = breed.id;
        return option
    })

    breedOptions.forEach(breedOption => {
        select.appendChild(breedOption);
    })
    select.addEventListener(`change`, function(event) {
        changeDoggo(event);
    })
}

const fillDoggoImage = (imageUrl) => {
    console.log(imageUrl);
    const doggoContainer = document.querySelector(`#doggoImage`)
    const doggoImage = document.createElement(`img`);
    doggoImage.setAttribute(`src`, imageUrl);
    doggoContainer.append(doggoImage);
}


const getDogByBreed = async(breedId) => {

    const data = await fetch(BASE_API_URL + `/images/search?include_breed=1&breed_id=` + breedId).then((data) => data.json());
    fillDoggoImage(data[0].url);
}


const changeDoggo = (event) => {
    console.log(event.target.value);
    getDogByBreed(event.target.value)

}

fetchDoggoBreeds();