/* PRACTICING METHODS */
const array = ['one', 'two', 'three']
const htmlStringArray = array.map((element)=> `<li>${element}</li>`)
// document.querySelector("#myList").innerHTML = htmlStringArray.join("");

const array2 = ['A', 'B', 'A']
const gradesToGPA = array2.map((element)=> element.toLowerCase() === "a" ? 4 : 3)
// document.querySelector("#myList").innerHTML = gradesToGPA;

const avgGPA = gradesToGPA.reduce((acc, currentValue)=> acc + currentValue / gradesToGPA.length, 0)
document.querySelector("#myList").innerHTML = avgGPA;

// INDEXOF METHOD
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
//expected output: 2 <= the luckynum is in the index 2

/* ARRAY METHODS FILTER, MAP, REDUCE */
// // filter()
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);

// // map()
// const array1 = [1, 4, 9, 16];
// // Pass a function to map
// const map1 = array1.map((x) => x * 2);
// console.log(array1, map1);


// // reduce()
// const array2 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array2.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// console.log(sumWithInitial);
// // Expected output: 10

// // knowledge test
// let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
// const namesB = names.filter((name)=> name.charAt(0) === "B" )
// console.log(namesB);

// const namesLenght = names.map((name)=> name.length)
// console.log(namesLenght);

// const avgStringLenght = names.reduce((acc, currValue)=> acc + currValue.length / names.length,0)
// console.log(avgStringLenght);

/* TESTING FUNCTIONS */
// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// const section = document.querySelector("section");
// const para = document.createElement('p');

// const chooseName = (names) => names[Math.floor(Math.random()*8)]

// para.textContent = chooseName(names);

// // Don't edit the code below here!

// section.appendChild(para);

/* UNDERSTANDING FUNCTIONS */
// //function declaration
// function fullName(name, lastname) {
//   return name + " " + lastname;  
// }
// console.log("Function declaration:", fullName("Karol", "Bracho"));

// //anonymous function expression
// const fullName2 = function (name, lastname){
//   return name + " " + lastname; 
// }
// console.log("Function expression:", fullName2("Karol", "Bracho"));

// //arrow function expression
// const fullName3 = (name, lastname)=> name + " " + lastname;
// console.log("Arrow function:", fullName3("Karol", "Bracho"));

// // Write an expression that calls the fullName function declaration and
// // writes the result to an existing HTML element's text node with the ID of fullName
// const element = document.querySelector("#fullName").innerHTML = fullName("Karol", "Bracho");


/* OPERATORS ACTIVITY */
// let shipHealth = 3;
// let shipAmmo = 3;
// let targetHealth = 3;

// function fireShip() {
//   if (shipCanFire()) {
//     shipAmmo--;
//     if (isHit()) { 
//       targetHealth--;
//       console.log("hit - targetHealth:", targetHealth);
//     } else {
//       console.log("miss");
//     }
//   } else {
//     reloadShip();
//     console.log("reloading, shipHealth:", shipHealth);
//   }
// }

// function encounter() {
//   console.log("You see a target");
//   if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
//     fireShip();
//     if (isDestroyed(targetHealth)) {
//       console.log("Target eliminated"); 
//     }
//     if (isDestroyed(shipHealth)) {
//       console.log("ship destroyed");
//     }
//   }
// }

// function isHit(){
//   return Math.random() > 0.5;
// }

// function shipCanFire(){
// return shipHealth > 0 && shipAmmo > 0;
// }

// function isDestroyed(health){
// return health <= 0;
// }

// function reloadShip(){
//   shipHealth--;
//   shipAmmo += 3;
// }

// encounter();

/* DEBUGGING ACTIVITY*/
// let num1 = 2;
// let num2 = 4;
// let num3 = 5;
// let num4 = 13;

// let sum = num1 + num2;
// let substract = num4 - num3;
// let finalResult = sum * substract;
// let evenOddResult = finalResult % 2;

// console.log(finalResult);
// console.log(evenOddResult);

