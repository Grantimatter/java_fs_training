// Function
function navigatePage(pageUrl){
    window.location.href = pageUrl
}

// Anonymous function
var anon = function(){
    console.log("I'm an anonymous function!");
}

// Arrow function
var arrow = () => {console.log("I'm an arrow function!")}

// Callback function

function func1(x){
    console.log("x = "+x)
}

function func2(y, cb){
    cb(y);
}

// Scopes

// a is undefined at this point but is hoisted
console.log(a);

// This is on the global scope;
var a = 5;

// a has been assigned and can be referenced;
console.log(a);
