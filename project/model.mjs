/* async getData Function using fetch()*/
export default async function getData(url){
  const response = await fetch(url);
  if (response.ok) {
    let charactersList = await response.json();
    return charactersList.results; 
  }
}