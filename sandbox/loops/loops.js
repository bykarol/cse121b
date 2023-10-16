// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Using forEach
// function createAndAppendFoodItem(food) {
//     let liElement = document.createElement("li");
//     liElement.textContent = food;
//     document.querySelector("#favorite-foods").appendChild(liElement);  
// }
// myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// Using map
// const placesLived = myInfo.placesLived.map((place)=>`<dt>${place.place}</dt><dd>${place.length}</dd>`).join("");
// document.querySelector("#places-lived").innerHTML = placesLived;


function foodTemplate(food) {
  return `<li>${food}</li>`
}

function placeTemplate(place){
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");  
}


document.querySelector("#favorite-foods").innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodTemplate
);
document.querySelector("#places-lived").innerHTML = generateListMarkup(
  myInfo.placesLived,
  placeTemplate
);

// Testing loops
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44, 9];

console.log("For loop");
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT){
    console.log(studentReport[i]);
  }  
}

console.log("While loop");
let flag = 0
while(flag < studentReport.length) {
  if(studentReport[flag] < LIMIT){
    console.log(studentReport[flag]);
  }
flag++;
}

console.log("forEach loop");
studentReport.forEach((element)=>{if(element < LIMIT){ console.log(element);}})

console.log("For in loop");
for (const index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);  
  }
}

const today = new Date();
for (let i = 0; i <= DAYS; i++) {
  let nextday = new Date();
  nextday.setDate(today.getDate() + i);
  let nextdaystring = new Intl.DateTimeFormat('en-US',{ weekday: 'long'}).format(nextday)
  console.log(nextdaystring);
}