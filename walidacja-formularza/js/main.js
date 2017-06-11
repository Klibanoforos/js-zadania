'use strict';

//var zgody = document.getElementById('wszystkie-zgody');
//
//var czekboksy = document.querySelectorAll('input[type=checkbox]');
//
//function checkBoxState() {
//    if (zgody.checked = true) {
//        czekboksy.checked = true;
//    }
//}
//
//zgody.onclick = checkBoxState;

function validateForm(e) {
    var pola = document.querySelectorAll('input[type=text]');
    e.preventDefault();
    console.log(pola);
    for (var pola = 0; pola < 2; pola++) {
        console.log(pola);
    }
}

document.getElementById("form").addEventListener('submit', validateForm);

