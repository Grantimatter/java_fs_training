const api = "https://pokeapi.co/api/v2/pokemon/";
const wiki = "https://pokemon.fandom.com/wiki/";

class Pokemon{
    constructor(id, name, type, sprite_front_url){
        this.id = id;
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        if(this.name.includes('-')){
            if(this.name.includes('-m')){
                this.name = String(this.name).replace('-m', '\u2642');
            }else if(this.name.includes('-f')){
                this.name = String(this.name).replace('-f', '\u2640');
            }
        }
        this.type = type;

        this.div = document.createElement("div");
        this.div.style.backgroundColor = "rgb(25,25,25)";
        this.div.style.display = "flex";
        this.div.style.justifyContent = "min-content";
        this.div.style.justifyItems = "center";
        this.div.style.flexDirection = "column";
        this.div.style.border = "2px grey solid";

        // The name element
        let nameElement = document.createElement("a");
        nameElement.href = wiki + this.name;
        nameElement.target = "_blank";
        nameElement.classList.add("badge","badge-dark");
        nameElement.style.margin = "8px";
        nameElement.style.padding = "4px 8px";
        nameElement.style.display = "flex";
        nameElement.style.justifyContent = "center";
        nameElement.style.alignItems = "center";
        nameElement.style.alignSelf = "center";
        nameElement.style.alignContent = "center";
        nameElement.style.flexDirection = "row";
        nameElement.innerHTML = this.name + "\u00A0\u00A0";

        let idElement = document.createElement("span");
        idElement.classList.add("badge", "badge-pill", "badge-secondary");
        idElement.style.alignSelf = "center";
        idElement.style.fontSize = "x-small";
        idElement.innerHTML = id;
        nameElement.appendChild(idElement);

        this.div.appendChild(nameElement);

        this.link = document.createElement("a");
        this.link.href = wiki + this.name;
        this.link.target = "_blank";
        let img = document.createElement("img");
        img.src = sprite_front_url;
        img.style.width = "60mm";
        //let types = JSON.parse(type);
        let typeString = this.type[0].type.name.charAt(0).toUpperCase() + this.type[0].type.name.slice(1);
        if(type.length > 1) typeString += this.getTypes(type);
        img.title = this.name + " | " + typeString + " | " + id;
        this.link.appendChild(img);

        let typeDiv = document.createElement("div");
        typeDiv.style.display = "flex";
        typeDiv.style.justifyContent = "space-evenly";
        typeDiv.style.flexDirection = "row";
        this.div.appendChild(typeDiv);

        let typeImgs = this.getTypeImageArray(type);
        
        for(var typeimg of typeImgs){
            let typeLink = document.createElement("a");
            typeLink.href = wiki + typeimg.title;
            typeLink.target = "_blank";
            typeLink.appendChild(typeimg);
            typeDiv.appendChild(typeLink);
        }
        this.div.appendChild(this.link);
    }
    getTypes(types){
        for(i = 1; i < types.length; i++){
            return ", " + types[i].type.name.charAt(0).toUpperCase() + types[i].type.name.slice(1);
        }
        return "";
    }
    getTypeImageArray(types){
        let typeImages = new Array(types.length);
        for(i = 0; i < typeImages.length; i++){
            let img = document.createElement("img");
            img.src = this.getTypeImageUrl(types[i].type.name);
            //img.style.width = "50%";
            img.height = "24";
            img.title = types[i].type.name+"_type";
            //img.style.margin = "3px";
            typeImages[i] = img;
        }
        return typeImages;
    }
    getTypeImageUrl(typeName){
        switch(typeName){
            case "normal":
                return "https://cdn.bulbagarden.net/upload/0/0f/NormalIC.png";
            case "grass":
                return "https://cdn.bulbagarden.net/upload/a/a5/GrassIC.png";
            case "water":
                return "https://cdn.bulbagarden.net/upload/b/b0/WaterIC.png";
            case "fire":
                return "https://cdn.bulbagarden.net/upload/9/9f/FireIC.png";
            case "fighting":
                return "https://cdn.bulbagarden.net/upload/9/9b/FightingIC.png";
            case "flying":
                return "https://cdn.bulbagarden.net/upload/d/dc/FlyingIC.png";
            case "poison":
                return "https://cdn.bulbagarden.net/upload/8/86/PoisonIC.png";
            case "electric":
                return "https://cdn.bulbagarden.net/upload/e/ea/ElectricIC.png";
            case "ground":
                return "https://cdn.bulbagarden.net/upload/8/87/GroundIC.png";
            case "psychic":
                return "https://cdn.bulbagarden.net/upload/f/f8/PsychicIC.png";
            case "rock":
                return "https://cdn.bulbagarden.net/upload/e/e6/RockIC.png";
            case "ice":
                return "https://cdn.bulbagarden.net/upload/8/86/IceIC.png";
            case "bug":
                return "https://cdn.bulbagarden.net/upload/b/bd/BugIC.png";
            case "dragon":
                return "https://cdn.bulbagarden.net/upload/c/c3/DragonIC.png";
            case "ghost":
                return "https://cdn.bulbagarden.net/upload/c/c3/GhostIC.png";
            case "dark":
                return "https://cdn.bulbagarden.net/upload/e/e3/DarkIC.png";
            case "steel":
                return "https://cdn.bulbagarden.net/upload/7/7e/SteelIC.png";
            case "fairy":
                return "https://cdn.bulbagarden.net/upload/3/31/FairyIC.png";
        }
    }
}

function ajaxFunc(num){
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(xhr.responseText);
            newPokemon = new Pokemon(num, data.species.name, data.types, data.sprites.other["official-artwork"].front_default);
            addPokemon(newPokemon.div, num);
        }
    }

    onGotPokemon = xhr.onreadystatechange

    xhr.open("GET", api + Number(num));
    xhr.send();
}

let pokemonLoaded = 0;
let generationArray = [151, 100, 135, 107, 156, 72, 88, 88];
var pokeArray = [];

let pokeDiv = document.createElement("div");
pokeDiv.style.display = "flex";
pokeDiv.style.justifyContent = "center";
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
    pokeGenh1.innerHTML = "Generation " + generation + " Pok\u00E9mon";
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
    console.log("Displaying Pokemon");
    document.body.appendChild(pokeDiv);
    for(pokemon of pokeArray){
        if(pokemon){
            pokeDiv.appendChild(pokemon);
        }
    }
}

getGeneration(1);
