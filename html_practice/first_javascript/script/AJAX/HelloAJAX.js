function ajaxFunc(num){
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(xhr.responseText);
            let pokepic = document.createElement("img");

            pokepic.setAttribute("src", data.sprites.front_default);
            pokepic.title = data.name;
            let span = document.createElement("span");
            span.appendChild(pokepic);
            addPokemon(span, num);
            
        }
    }

    onGotPokemon = xhr.onreadystatechange

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + Number(num));
    xhr.send();
}

let pokemonLoaded = 0;
let generationArray = [151, 100, 135, 107, 156, 72, 88, 88];
var pokeArray = [];

let pokeDiv = document.createElement("div");
pokeDiv.style.display = "flex";
pokeDiv.style.justifyContent = "space-between";
pokeDiv.style.flexWrap = "wrap";


var currentGen;
var pokeRange;

let getGeneration = function(generation){
    let pokeGenh1 = document.createElement("h1");
    pokeGenh1.setAttribute("center", "");
    pokeGenh1.style.border = "2px rgb(255, 237, 214) solid";
    pokeGenh1.style.borderRadius = "8px";
    pokeGenh1.style.width = "max-content";
    pokeGenh1.style.padding = "0px 16px";
    pokeGenh1.innerHTML = "Generation " + generation + " Pokemon";
    document.body.append(pokeGenh1);

    console.log("Number of pokemon in generation " + generation + ": " + generationArray[generation-1]);
    let start = 1;
    pokeRange = generationArray[generation - 1];
    for(i = 0; i < generation-1; i++){
        start += generationArray[i];
    }

    pokeArray = new Array(start + pokeRange);

    for(i = start; i < start + pokeRange; i++){
        console.log("Getting pokemon with id of " + i);
        ajaxFunc(i);
    }
    document.body.appendChild(pokeDiv);
}

let getPokemon = function(pokemonId){
    ajaxFunc(pokemonId);
}

let addPokemon = function(element, num){
    pokeArray[num] = element;
    pokemonLoaded++;
    if(pokemonLoaded >= pokeRange){
        displayPokemon();
    }
}

let displayPokemon = function(){
    for(pokemon of pokeArray){
        if(pokemon){
            pokeDiv.appendChild(pokemon);
        }
    }
}

getGeneration(6);
