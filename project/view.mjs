const charactersElement = document.querySelector("#characters");

/* async displayCharacters Function */
export async function displayCharacters (data){
  let characters = await data
 characters?.forEach((character)=>{
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

/* sortBy Function */
export const sortBy = async (data)=>{
  let characters = [...await data]
  reset();
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

/* reset Function */
const reset = ()=>{
  charactersElement.innerHTML = "";
}