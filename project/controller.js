/* W05: Programming Tasks */
import getData from "./model.mjs";
import {displayCharacters, sortBy} from "./view.mjs";

/* Declare and initialize global variables */
const url = "https://rickandmortyapi.com/api/character";

// fetching the data
const data = getData(url)

// display the data
displayCharacters(data)

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy(data)})
