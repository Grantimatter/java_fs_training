//PokeAPI endpoint
const api = 'https://pokeapi.co/api/v2/pokemon/';

let div = document.createElement("div");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.width = "max-content";
document.body.appendChild(div);

let userInput = document.createElement("input");
userInput.type = "number";
userInput.id = "userInput";

let getButton = document.createElement("button");
getButton.innerHTML = "Get Pok\u00E9mon";
getButton.onclick = getData;

let dataDiv = document.createElement("div");

div.appendChild(userInput);
div.appendChild(getButton);
div.appendChild(dataDiv);

async function getData(){
    let input = userInput.value;
    let response = await fetch(api + input + '/');
    if(response.status === 200){
        let data = await response.json();
        populateData(data);
    }else{
        dataDiv.innerHTML = "Pokemon not found!";
    }
}

function populateData(data){
    let nameTag = document.createElement("h3");
    nameTag.innerHTML = data.species.name;

    let abilitiesArray = data.abilities;
    let abilityList = document.createElement("ul");
    for(let ability of abilitiesArray){
        let item = document.createElement("li");
        item.innerHTML = ability.ability.name;
        abilityList.appendChild(item);
    }
    dataDiv.appendChild(abilityList);
}