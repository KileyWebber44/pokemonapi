const baseURL = `https://pokeapi.co/api/v2/evolution-chain/`
let url;

const searchForm = document.querySelector(".input")

searchForm.addEventListener("submit", fetchEvoChain)

function fetchEvoChain(e) {
    e.preventDefault()
    let id = searchForm.value;
    url = baseUrl + id;
    fetch(url)
    .then(responseObj => responseObj.json())
    .then(jsonData => console.log(jsonData))
    }  

// function displayEvoChain(jsonData) {
    // document.createElement("li")
    

// }

