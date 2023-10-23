/* async getCharacters Function using fetch()*/
export async function getCharacters(url){
  const response = await fetch(url);
  if (response.ok) {
    let charactersList = await response.json();
    return charactersList.results; 
  }
}

export async function getInfo(url){
  const response = await fetch(url);
  if (response.ok) {
    let charactersList = await response.json();
    return charactersList.info; 
  }
}