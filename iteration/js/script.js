// iteration eller loopar = Går igenom en hel array och t.ex. läser
// allt i arrayen.

const myArray = [4, 5, 24, 5, 1, 77, 6];

// krångligt att skriva så här för att läsa hela arrayen:
const index1 = myArray[0];
const index2 = myArray[1];
const index3 = myArray[2];
const index4 = myArray[3];
const index5 = myArray[4];
const index6 = myArray[5];
const index7 = myArray[6];

//for loop
for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log(myArray);

// räkna summan av arrayen
let sum = 0;
for(let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log("sum", sum);


// array-funktion som loop
// forEach
let sum2 = 0;
myArray.forEach(function(item) {
    sum2 += item;
})
console.log("sum2", sum2);

