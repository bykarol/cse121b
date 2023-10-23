/* W05: Programming Tasks */
import {getCharacters, getInfo} from "./model.mjs";
import {displayCharacters, sortBy, displayInfo} from "./view.mjs";
import  pageManagement from "./helpers.mjs";

/* Declare and initialize global variables */
let numPage = 1
const url = "https://rickandmortyapi.com/api/character";

// fetching the data
const characters = getCharacters(url)
const info = getInfo(url)

// display the data
displayCharacters(characters)
displayInfo(info, numPage=1)


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy(characters)})
document.querySelector("#previous").addEventListener("click", pageManagement)
