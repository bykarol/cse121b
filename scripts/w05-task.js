/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (data)=>{
  data.forEach((temple)=>{
    const articleEl = document.createElement("article");
    const h3El = document.createElement("h3");
    const imgEl = document.createElement("img");
    h3El.textContent = temple.templeName;
    imgEl.setAttribute("src", temple.imageUrl);
    imgEl.setAttribute("alt", temple.templeName);

    articleEl.appendChild(h3El);
    articleEl.appendChild(imgEl);
    templesElement.appendChild(articleEl);
  })
}

/* async getTemples Function using fetch()*/
const getTemples = async (url)=>{
  const response = await fetch(url);
  if (response.ok) {
    templeList = await response.json();
    displayTemples(templeList); 
  }
}

/* reset Function */
const reset = ()=>{
  templesElement.innerHTML = "";
}


/* sortBy Function */
const sortBy = (temples)=>{
  reset();
  const filter = document.querySelector("#sortBy").value;
  let templeFilteredList;
  switch (filter) {
    case "utah":
      templeFilteredList = temples.filter((temple)=>{return temple.location.includes("Utah")});
      console.log(templeFilteredList);
      break;
    case "notutah":
     templeFilteredList = temples.filter((temple)=>{return !temple.location.includes("Utah")});
      break;
    case "older":
      templeFilteredList = temples.filter((temple)=>{
        const dedicated = new Date(temple.dedicated)
        return dedicated < new Date(1950, 0, 1)
      });
    break;
    case "alphabetically":
        templeFilteredList = temples.sort((a,b)=>{
          if (a.templeName > b.templeName) {
            return 1;
          } else if (a.templeName < b.templeName) {
            return -1;
          } else return 0;
        });
    break;
    case "all":
      templeFilteredList = temples;
    break;
  }
  displayTemples(templeFilteredList);
}


getTemples(url);

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy(templeList)})
