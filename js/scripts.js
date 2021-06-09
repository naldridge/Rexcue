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