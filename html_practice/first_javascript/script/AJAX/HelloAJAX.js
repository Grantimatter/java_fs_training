let pokeDiv = document.createElement("div");
pokeDiv.style.display = "flex";
pokeDiv.style.justifyContent = "space-between";
pokeDiv.style.flexWrap = "wrap";
document.body.appendChild(pokeDiv);

let loaded = 0;
const pokeStartNum = 1;
const pokeRange = 151;
var pokeArray = [pokeRange];

function ajaxFunc(num){
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(xhr.responseText);
            let pokepic = document.createElement("img");

            pokepic.setAttribute("src", data.sprites.front_default);
            let span = document.createElement("span");
            span.appendChild(pokepic);
            sortPokemon(pokepic, num);
            loaded++;
            if(loaded == pokeRange){
                console.log("Last pokemon reached");
                displayPokemon();
            }
        }
    }

    onGotPokemon = xhr.onreadystatechange

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + Number(num));
    xhr.send();
}

function sortPokemon(pokemonElement, pokeNum){
    console.log("Sorting pokemon");
    pokeArray[pokeNum - pokeStartNum] = pokemonElement;
}

function displayPokemon(){
    for(const pokemon of pokeArray){
        pokeDiv.appendChild(pokemon);
    }
    console.log("Displayed Pokemon");
}

let getPokemon = function(startNum, range){
    for(i = startNum; i < startNum + range; i++){
        ajaxFunc(i, i == startNum + range - 1 ? true : false);
    }
}

getPokemon(pokeStartNum, pokeRange);