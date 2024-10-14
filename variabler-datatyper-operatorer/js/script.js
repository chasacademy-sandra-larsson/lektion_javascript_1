// Variabler - behållare för data i Javascript och alla andra programmeringspråk

// 1. Deklarera en variabel med let
let myNumber;

console.log("myNumber", myNumber)

// 2. Tilldela en variabel ett värde
let anotherNumber = 5;
console.log("anotherNumber", anotherNumber)

// 3. Tilldela en variabeln en annans variabels värde
let myNumber2 = anotherNumber;
console.log("myNumber2", myNumber2)

// 4. Uppdatera variabelns värde
myNumber = 10;
myNumber = myNumber + 3;
console.log("myNumber", myNumber)


// 5. Ta bort variabelns värde 
myNumber = null;
console.log("myNumber", myNumber)


// 6. Variabler kan deklareras med var, let eller const 
// var = gamla sättet 
// let och const är ES6
// let är ny var (förutom en viss skillnad) 
// const innebär att det inte går att ändra
const secretNumber = 1234
console.log("secretNumber", secretNumber)
//secretNumber = "hej"


// 7. Operatorer (räkna matte)
// +, -, *, /
const sum = 1 + 20;
let prod = 9 * 9;
console.log("sum", sum, "prod", prod)


// 8. Öka med ett;
let counter = 0;
// counter = counter + 1;
counter += 1;
console.log("counter", counter)
counter = counter - 1;
counter -= 1;
console.log("counter", counter)
counter *= 10;
console.log("counter", counter)


// 9. Modulo % - operatorn - beräkna reseten
let remainder = 100 % 3; // Rest vid heltalsdivision
console.log(remainder)

// Är det jämnt?
let i = 52;
const isEven = i % 2 === 0;
console.log("isEven", isEven)


// 10. Strategi - börja deklarera med const, om du märker att variabel kommer att ändras byt till let