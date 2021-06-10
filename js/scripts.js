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

const inputs = document.querySelectorAll('input');
const showMeButton = document.getElementById('showMe');

function showResults() {
     const resultsArray = [];
     
     
    //Gets input values on quiz
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type = "radio") {
            if (inputs[i].checked)
                resultsArray[i] = inputs[i].value;
        };

    };
    //filters resultsArray to remove empty radio selections
    const answeredArray = resultsArray.filter(function () { return true });

    //console.log(answeredArray);    
};

showMeButton.addEventListener('click', function () {
    //styles form answers based on user's inputs
    inputs.forEach(function (input) {
        if (input.checked) {
            input.parentNode.style.color = "green";
        } else {
            console.log("THIS IS NOT CHECKED")
            input.parentNode.style.color = "red";
        }
    });
    showResults();
});

function mapAnsweredArray() {
    
}

//Define Dog Breed Classes
class dog {
    constructor(breed, traitValue1, traitValue2, traitValue3, traitValue4, traitValue5) {
        this.breed = breed;
        this.traitValue1 = traitValue1;
        this.traitValue2 = traitValue2;
        this.traitValue3 = traitValue3;
        this.traitValue4 = traitValue4;
        this.traitValue5 = traitValue5;
    }
    getBreedCard() {
        return (`You are a ${this.breed}!`);
    }
};

class user {

    constructor( traitValue1, traitValue2, traitValue3, traitValue4, traitValue5) {
        this.traitValue1 = traitValue1;
        this.traitValue2 = traitValue2;
        this.traitValue3 = traitValue3;
        this.traitValue4 = traitValue4;
        this.traitValue5 = traitValue5;
    }
};


let dog1 = new dog('Jack Russell Terrier', '3', '3', '5', '2', '4');
let dog2 = new dog('American Bulldog', '2', '2', '5', '2', '5');
let dog3 = new dog('Great Dane', '2', '4', '2', '4', '3');
let dog4 = new dog('Chihuahua', '1', '5', '1', '4', '5');
let dog5 = new dog('German Shepherd', '5', '1', '5', '5', '5');