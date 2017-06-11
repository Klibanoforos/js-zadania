'use strict';


//zadanie pierwsze

var jsonPracownicy = {
"pracownicy":[
    {"firstName": "Krystian", "lastName": "Dziopa"},
    {"firstName": "Anna", "lastName": "Szapiel"},
    {"firstName": "Piotr", "lastName": "Żmuda"}
]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function (e, index) {  
    console.log(e, index);
});


//zadanie drugie

var przycisk = document.getElementById('tlo');

function ustawTlo() {
    document.getElementById('first').style.backgroundColor = "red";
    document.getElementById('second').style.backgroundColor = "yellow";
}

przycisk.onclick = ustawTlo;

//zadanie trzecie

var form = document.getElementById('formularz');

function stop(e) { 
    e.preventDefault();
    console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);
};

form.onsubmit = stop;

