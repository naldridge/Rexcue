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
const quizResults = document.getElementById('quizResults');


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
    const newUser = createUser(answeredArray);
    

    let match = Dogs.find(match => match.traitValue1 === answeredArray[0]
        && match.traitValue2 === answeredArray[1]
        && match.traitValue3 === answeredArray[2]
        && match.traitValue4 === answeredArray[3]
        && match.traitValue5 === answeredArray[4]);

    function showMatch() {
        if (Boolean(match)) {
            let matchBreed = match.breed;
            console.log("match is: ", match.breed);
            quizResults.innerText =  matchBreed;
            return match;
        } else {
            console.log("no match found");
            return;
        };
    };

    showMatch();

    console.log(match);


};



//creates User and fills it will the answeredArray
function createUser(answeredArray) {
    const newUser = new User(answeredArray)
    return newUser;
};




showMeButton.addEventListener('click', function () {
    //styles form answers based on user's inputs
    inputs.forEach(function (input) {
        if (input.checked) {
            input.parentNode.style.color = "green";
        } else {
            //console.log("THIS IS NOT CHECKED")
            input.parentNode.style.color = "red";
        }
    });
    showResults();
});



//Define Dog Breed Classes
let Dogs = [
    {
        "breed": "Jack Russell Terrier",
        "traitValue1": "3",
        "traitValue2": "3",
        "traitValue3": "5",
        "traitValue4": "2",
        "traitValue5": "4",
    },
    {
        "breed": "American Bulldog",
        "traitValue1": "2",
        "traitValue2": "2",
        "traitValue3": "5",
        "traitValue4": "2",
        "traitValue5": "5",
    },
    {
        "breed": "Great Dane",
        "traitValue1": "2",
        "traitValue2": "4",
        "traitValue3": "2",
        "traitValue4": "4",
        "traitValue5": "3",
    },
    {
        "breed": "Chihuahua",
        "traitValue1": "1",
        "traitValue2": "5",
        "traitValue3": "1",
        "traitValue4": "4",
        "traitValue5": "5",
    },
    {
        "breed": "German Shepherd",
        "traitValue1": "5",
        "traitValue2": "1",
        "traitValue3": "5",
        "traitValue4": "5",
        "traitValue5": "5",
    },
    /* {
        "breed": "",
        "traitValue1": "",
        "traitValue2": "",
        "traitValue3": "",
        "traitValue4": "",
        "traitValue5": "",
    }, */
]
/* class Dog {
    constructor(breed, traitValue1, traitValue2, traitValue3, traitValue4, traitValue5) {
        this.breed = breed;
        //this.traitValueArray = traitValueArray;
        this.traitValue1 = traitValue1;
        this.traitValue2 = traitValue2;
        this.traitValue3 = traitValue3;
        this.traitValue4 = traitValue4;
        this.traitValue5 = traitValue5;
    };

    updateBreedArray() {
        breedArray.push(Object.values(this));
    };

}; */

class User {
    traitvalues = []

    constructor(traitvalues) {
        this.traitvalues = traitvalues;
    }
};

/* let dog1 = new Dog('Jack Russell Terrier', '3', '3', '5', '2', '4').updateBreedArray();
let dog2 = new Dog('American Bulldog', '2', '2', '5', '2', '5').updateBreedArray();
let dog3 = new Dog('Great Dane', '2', '4', '2', '4', '3').updateBreedArray();
let dog4 = new Dog('Chihuahua', '1', '5', '1', '4', '5').updateBreedArray();
let dog5 = new Dog('German Shepherd', '5', '1', '5', '5', '5').updateBreedArray(); */












