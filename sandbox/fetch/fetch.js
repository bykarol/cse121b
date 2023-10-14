const url = 'https://pokeapi.co/api/v2/pokemon/ditto'; // one element
const urlList = 'https://pokeapi.co/api/v2/pokemon'; // many elements
let results = null;
async function getPokemon(url, doThis) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doThis(data);
  }
}
function doStuff(data) {
  //one element - Pokemon Ditto
  const sectionEl = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`
  sectionEl.innerHTML = html;
  console.log("first: ", results);
}
getPokemon(url, doStuff)

async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuffList(data) {
  // Many elements
  const ulEl = document.querySelector("#outputList");
  let list = data.results;
 list = sortPokemon(list);
  list.forEach(element => {
    const html = `<li>${element.name}</li>`
    ulEl.innerHTML += html;
  });  
}

function compare(a, b) {
  if (a.name > b.name) {
    // sort b before a
    return 1;
  } else if (a.name < b.name) {
    // a and b different but unchanged (already in the correct order)
    return -1;
  } else return 0; // a and b are equal
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}
getPokemon(urlList, doStuffList)
console.log("second: ", results)
