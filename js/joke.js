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