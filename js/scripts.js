`use strict`

/* 
document.addEventListener('DOMContentLoaded', function () {
    fetch()
        .then(function () {
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
            return error;
        })

}); */

//Style the Personality Quiz input selections
// const inputs = document.querySelectorAll('input');
// const showMeButton = document.getElementById('showMe');

// showMeButton.addEventListener('click', function() {
//     inputs.forEach(function(input) {
//         if (input.checked) {
//             input.parentNode.style.color = "green";
//         } else {
//             console.log("THIS IS NOT CHECKED")
//             input.parentNode.style.color = "red";
//         }
//     });
// });

// Get the Sidebar
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

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            buildQuote(data.value);
        })
        .catch(function(error) {
            console.error("ERROR: ", error);
            return error;
        });

    document.addEventListener('keydown', function(event) {
        console.log("the key that was pressed is: ", event.key);
        if (event.key === 'Escape') {
            toggleModal();
        }
    });

    const overlay = document.querySelector('#overlay');

    overlay.addEventListener('click', function() {
        toggleModal();
    });
});