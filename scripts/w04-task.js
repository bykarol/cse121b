/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Karol Bracho",
  photo: "images/me.jpg",
  favoriteFoods: ["Chao Fan", "Tequeños", "Pizza", "Beef Steak", "Wings"],
  hobbies: ["Dancing", "Swimming", "Watching movies", "Reading", "Travelling"],
  placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: "Venezuela", lenght: "28 years"})
myProfile.placesLived.push({place: "Dominican Republic", lenght: "2 months"})
myProfile.placesLived.push({place: "Colombia", lenght: "4 months"})
myProfile.placesLived.push({place: "Ecuador", lenght: "3 and a half years"})
myProfile.placesLived.push({place: "Czech Republic", lenght: "3 months"})
myProfile.placesLived.push({place: "Spain", lenght: "4 years"})

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name

/* Photo with attributes */
const imgElement = document.querySelector("#photo")
imgElement.setAttribute("src", myProfile.photo)
imgElement.setAttribute("alt",`Photo of ${myProfile.name}`)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let liElement = document.createElement("li")
  liElement.textContent = food
  document.querySelector("#favorite-foods").appendChild(liElement)
});

// I tried this way as well:
// let liElements = myProfile.favoriteFoods.map(food => `<li>${food}</li>`)
// document.querySelector("#favorite-foods").innerHTML = liElements.join("")

/* Hobbies List */
myProfile.hobbies.forEach((hobby)=>{
  let liElement = document.createElement("li")
  liElement.textContent = hobby
  document.querySelector("#hobbies").appendChild(liElement)
})

/* Places Lived DataList */
myProfile.placesLived.forEach((place)=>{
  let dlElement = document.querySelector("#places-lived")
  let descriptionElement = document.createElement("dt")
  let definitionElement = document.createElement("dd")
  descriptionElement.textContent = place.place
  definitionElement.textContent = place.lenght

  dlElement.appendChild(descriptionElement)
  dlElement.appendChild(definitionElement)
})
