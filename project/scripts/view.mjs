const charactersElement = document.querySelector("#characters");
import reset from "./helpers.mjs"

/* async displayCharacters Function */
export async function displayCharacters (data){
  reset(charactersElement);
  let characters = await data
 characters?.forEach((character)=>{
    let characterHTML = `
    <article>
    <h3>${character.name}</h3>
    <img src="${character.image}" alt="Image of ${character.name}"/>
    <h4>Status: ${character.status}</h4>
    <h4>Specie: ${character.species}</h4>
    <h4>Gender: ${character.gender}</h4>
    </article>`
    charactersElement.innerHTML += characterHTML;
  });
}

/* sortBy Function */
export const sortBy = async (data)=>{
  let characters = [...await data]
  reset(charactersElement);
  const filter = document.querySelector("#sortBy").value;
  let charactersFilteredList;
  switch (filter) {
    case "human":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.species === "Human"){
          return character;
        }});
      break;
    case "nothuman":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.species !== "Human"){
          return character;
        }});
      break;
    case "alive":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.status === "Alive"){
          return character;
        }});
    break;
    case "notalive":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.status !== "Alive"){
          return character;
        }});
    break;
    case "female":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.gender === "Female"){
          return character;
        }});
    break;
    case "male":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.gender === "Male"){
          return character;
        }});
    break;
    case "genderunknown":
      charactersFilteredList = characters?.filter((character)=>{
        if(character.gender !== "Male" && character.gender !== "Female"){
          return character;
        }});
    break;
    case "alphabetically":
        charactersFilteredList = characters?.sort((a,b)=>{
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else return 0;
        });
    break;
    case "all":
      charactersFilteredList = characters;
    break;
  }
  displayCharacters(charactersFilteredList);
}

export const displayInfo = async (data, numPage)=>{
  let info = await data
  document.querySelector("#page").textContent = `Page ${numPage}`
  document.querySelector("#total-pages").textContent = info.pages
  document.querySelector("#total-characters").textContent = info.count

}