console.log('Gotta catch em all')
const baseURL = `https://pokeapi.co/api/v2/evolution-chain`
let url;

const searchForm = document.querySelector("form");
const searchTerm = document.querySelector(".input");
// const submitButton = document.querySelector('#submit');

searchForm.addEventListener("submit", fetchEvoChain)

function fetchEvoChain(e) {
    e.preventDefault();
    url = `${baseURL}/${searchTerm.value}`
    console.log('URL:', url);

    fetch(url)
    .then(function (result) {
        console.log(result);
        return result.json();
    })
    .then(function (json) {
        console.log(json)
        displayEvoChain(json)
    })
    .catch((err) => console.error({ error: err }))
    }  

const theStuff = document.querySelector("ul")

function displayEvoChain(jsonData) {
    while (theStuff.firstChild) {theStuff.removeChild(theStuff.firstChild)}
    let newItem = document.createElement("li")
    newItem.innerText = `${jsonData.chain.species.name} evolves into ${jsonData.chain.evolves_to[0].species.name}`

    theStuff.appendChild(newItem)

}

