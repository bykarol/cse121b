/* W05: Programming Tasks */
import {getCharacters, getInfo} from "./model.mjs";
import {displayCharacters, sortBy, displayInfo} from "./view.mjs";

/* Declare and initialize global variables */
const url = `https://rickandmortyapi.com/api/character`;
let numPage = 1
const sortElement = document.querySelector("#sortBy");

// fetching the data
let characters = getCharacters(url)
let info = getInfo(url)

// display the data
displayCharacters(characters)
displayInfo(info, numPage)


/* Event Listener */
sortElement.addEventListener("change", ()=>{sortBy(characters)})
document.querySelector("#btns-pages").addEventListener("click", (e)=>{
  e.preventDefault()
  if(e.target.matches("button")){
    let newcharacters
    let newinfo
    switch (e.target.id) {
      case "previous":
          numPage--
          if (numPage < 1) {
            numPage = 42
          }
          newcharacters = getCharacters(`${url}?page=${numPage}`)
          newinfo = getInfo(`${url}?page=${numPage}`)

        break;
        case "next":
          numPage++
          if(numPage > 42){
            numPage = 1
          }
            newcharacters = getCharacters(url+`?page=${numPage}`)
            newinfo = getInfo(`${url}?page=${numPage}`)
          break;
        }        

        if(sortElement.value){
          sortBy(newcharacters)
        } else {
          displayCharacters(newcharacters)
        }
        displayInfo(newinfo, numPage)
        sortElement.addEventListener("change", ()=>{sortBy(newcharacters)})
      }
})
