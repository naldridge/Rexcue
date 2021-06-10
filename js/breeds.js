`use strict`

// Build breed list ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function buildBreeds(data) {
    const breedList = data.message;
    const breedsContentEl = document.querySelector('#breedsContent');
    // console.log("breedList is: ", breedList);
    const breedUl = document.createElement(`ul`);
    Object.entries(breedList).forEach(function(breed) {
        const breedItem = document.createElement(`p`);
        breedItem.innerText = breed[0];
        breedUl.appendChild(breedItem);
        // console.log(breed[0]);
    });
    breedsContentEl.append(breedUl)
}


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log("the data is: ", data);
            // console.log("the message is: ", data.message);
            buildBreeds(data);

        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    // fetch('https://dog.ceo/api/breeds/image/all')
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(data) {
    //     // console.log("the data is: ", data);
    //     // console.log("the message is: ", data.message);
    //     buildBreeds(data);

    // })
    // .catch(function(error) {
    //     console.error("ERROR: ", error);
    //     return error;
    // });


});


// Build Breed Pic Next To List ~~~~~~~~~~~~~~~~~~~~~~~~~



// Get the Sidebar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
const overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

// Joke Modal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function toggleModal() {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}

const closeModalButton = document.querySelector('#closeModal');

closeModalButton.addEventListener('click', function() {
    toggleModal();
});


function buildQuote(theQuote) {
    // 1. Select the #modal element
    // 2. Select the paragraph element from the #modal
    // 3. Change the innerText of the paragraph to be the quote
    // 4. Profit

    const modalElement = document.querySelector('#modal p');
    modalElement.innerText = theQuote;
    toggleModal();
}

// const tellJoke = document.querySelector(`#dogJokeModal`);


// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://api.chucknorris.io/jokes/random?category=dev')
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             buildQuote(data.value);
//         })
//         .catch(function(error) {
//             console.error("ERROR: ", error);
//             return error;
//         });

//     document.addEventListener('keydown', function(event) {
//         console.log("the key that was pressed is: ", event.key);
//         if (event.key === 'Escape') {
//             toggleModal();
//         }
//     });

//     const overlay = document.querySelector('#overlay');

//     overlay.addEventListener('click', function() {
//         toggleModal();
//     });
// });