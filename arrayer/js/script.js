// Arrayer
// Varför arrayer?: En datastruktur som låter en variabel hålla reda på flera (länkade) värden
const product1 = "hdmi kabel";
const product2 = "strömbrytare";
const product3 = "discolampa";

const products = ["hdmi kabel", "strömbrytare", "discolampa"];
                //    0              1               2

// CRUD - Create Read Update Delete


// Create
const numbers = [4, 5, 10, 3, 9, 66];

// Read
console.log(numbers[4]);
const index2 = numbers[2];
console.log(index2);

// Update
numbers[0] = 99;
numbers[numbers.length - 1] = -1;
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

// Delete med null
numbers[2] = null;
console.log(numbers)


// Delete med splice
numbers.splice(3, 1);
console.log(numbers);
numbers.splice(2, 4);
console.log(numbers);


// Create
//const newItem = "arbetshandskar";
console.log(products)
products.push("arbetshandskar");
console.log(products);

