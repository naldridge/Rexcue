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

showMeButton.addEventListener('click', function () {
    inputs.forEach(function (input) {
        if (input.checked) {
            input.parentNode.style.color = "green";
        } else {
            console.log("THIS IS NOT CHECKED")
            input.parentNode.style.color = "red";
        }
    });
});

//Define Dog Breed Classes
class dog {
    constructor(breed, temperValue1, temperValue2, temperValue3, temperValue4, temperValue5) {
        this.breed = breed;
        this.temperValue1 = temperValue1;
        this.temperValue2 = temperValue2;
        this.temperValue3 = temperValue3;
        this.temperValue4 = temperValue4;
        this.temperValue5 = temperValue5;
    }
};

let dog1 = new dog('Jack Russel Terrier', )