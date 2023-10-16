/* W05: Programming Tasks */

/* Declare and initialize global variables */
const charactersElement = document.querySelector("#characters");
let charactersList = [];
const url = "https://rickandmortyapi.com/api/character";

/* async displayCharacters Function */
const displayCharacters = (data)=>{
  data?.forEach((character)=>{
    let characterHTML = `
    <article>
    <h3>${character.name}</h3>
    <img src="${character.image}" alt="Image of ${character.name}"/>
    <p>Status: ${character.status}</p>
    <p>Specie: ${character.species}</p>
    <p>Gender: ${character.gender}</p>
    </article>`
    charactersElement.innerHTML += characterHTML;
  });
}

/* async getData Function using fetch()*/
const getData = async (url)=>{
  const response = await fetch(url);
  if (response.ok) {
    charactersList = await response.json();
    displayCharacters(charactersList.results); 
  }
}

/* reset Function */
const reset = ()=>{
  charactersElement.innerHTML = "";
}


/* sortBy Function */
const sortBy = (characters)=>{
  reset();
  const filter = document.querySelector("#sortBy").value;
  let charactersFilteredList;
  switch (filter) {
    case "human":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.species === "Human"){
          return character;
        }});
      break;
    case "nothuman":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.species !== "Human"){
          return character;
        }});
      break;
    case "alive":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.status === "Alive"){
          return character;
        }});
    break;
    case "notalive":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.status !== "Alive"){
          return character;
        }});
    break;
    case "female":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.gender === "Female"){
          return character;
        }});
    break;
    case "male":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.gender === "Male"){
          return character;
        }});
    break;
    case "genderunknown":
      charactersFilteredList = characters?.results.filter((character)=>{
        if(character.gender !== "Male" && character.gender !== "Female"){
          return character;
        }});
    break;
    case "alphabetically":
        charactersFilteredList = characters?.results.sort((a,b)=>{
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else return 0;
        });
    break;
    case "all":
      charactersFilteredList = characters?.results;
    break;
  }
  displayCharacters(charactersFilteredList);
}


getData(url);

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy(charactersList)})
