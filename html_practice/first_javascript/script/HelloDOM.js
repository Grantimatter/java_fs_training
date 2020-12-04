// All divs with classname coolclassname
let divElements = document.getElementsByClassName("coolclassname");

// First div element
let firstDiv = divElements[0];

let myButton = document.getElementById('jsbutton');

myButton.onclick = domFunc;

function domFunc(){
    alert("DOM function Alert!");
}

function adder(x){
    return function(y){
        return x+y;
    }
}

let add5 = adder(5);

console.log(add5(7));