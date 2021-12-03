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
    const answeredArray = resultsArray.filter(function() { return true });
    const newUser = createUser(answeredArray);

    //Finds Exact Matches between user inputs and Dog Traits
    let exactMatch = Dogs.find(exactMatch  => exactMatch.traitValue1 === answeredArray[0] &&
        exactMatch.traitValue2 === answeredArray[1] &&
        exactMatch.traitValue3 === answeredArray[2] &&
        exactMatch.traitValue4 === answeredArray[3] &&
        exactMatch.traitValue5 === answeredArray[4]);

    //Finds closest Matches if an exact Match isn't found
    function compareResults() {
        let possibleMatch = [];
        for (let i=0; i < Dogs.length; i++) {
            if (Dogs[i].traitValue1 === answeredArray[0]) {
                possibleMatch.push(Dogs[i].breed);
            } 
        }
        for (let i=0; i < Dogs.length; i++) {
            if (Dogs[i].traitValue2 === answeredArray[1]) {
                possibleMatch.push(Dogs[i].breed);
            } 
        }
        for (let i=0; i < Dogs.length; i++) {
            if (Dogs[i].traitValue3 === answeredArray[2]) {
                possibleMatch.push(Dogs[i].breed);
            } 
        }
        for (let i=0; i < Dogs.length; i++) {
            if (Dogs[i].traitValue4 === answeredArray[3]) {
                possibleMatch.push(Dogs[i].breed);
            } 
        }
        for (let i=0; i < Dogs.length; i++) {
            if (Dogs[i].traitValue5 === answeredArray[4]) {
                possibleMatch.push(Dogs[i].breed);
            } 
        }
        console.log("Possible Matches: ", possibleMatch);
        function mode(arr){
            return arr.sort((a,b) =>
            arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
            ).pop();
        }
        let bestMatch = mode(possibleMatch);
        console.log("Best Match: " + bestMatch);
        return bestMatch;
    }

   
    //shows comparison match if True, else shows closest match
    function showMatch() {
        if (Boolean(exactMatch)) {
            let matchBreed = exactMatch.breed;
            console.log("Exact Match: ", matchBreed);
            quizResults.innerText = "Your match is: " + matchBreed;
            return exactMatch;
        } else {
            let closestMatch = compareResults();
            quizResults.innerText = "Your match is: " + closestMatch
            return;
        };
    };

    
    showMatch();
};


//creates User and fills it will the answeredArray
function createUser(answeredArray) {
    const newUser = new User(answeredArray)
    return newUser;
};




showMeButton.addEventListener('click', function() {
    //styles form answers based on user's inputs
    inputs.forEach(function(input) {
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
let Dogs = [{
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


class User {
    traitvalues = []

    constructor(traitvalues) {
        this.traitvalues = traitvalues;
    }
};