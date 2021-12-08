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
// https://api.chucknorris.io/jokes/random?category=dev

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        buildQuote(data.value);
    })
    .catch(function(error) {
        console.error("ERROR: ", error)
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