// Deklarera en funktion
function addTen(num) {
   return num + 10;
}

const result = addTen(10);
console.log("result", result);
const result2 = addTen(33);
console.log("result2", result2);


// Deklarera vår fruitjuicer funktion
function fruitJuicer(fruit) {
    return fruit + "-juice";
}

console.log(fruitJuicer("apple"));
console.log(fruitJuicer("orange"));
console.log(fruitJuicer("pineapple"));


function doSomething() {
    console.log("Testar")
}

doSomething();

function checkAvailability(stock) {
    if(stock <= 0) {
        return "Varan är slut";
    } else if (stock <= 10 ) {
        return "Det finns få kvar";
    } else {
        return "Det finns många kvar";
    }
}

const tShirtInStock = 5;
const jeansInStock = 11;

const tShirts = checkAvailability(tShirtInStock);
console.log(tShirts);

const jeans = checkAvailability(jeansInStock);
console.log(jeans);

// Arrowfunktioner (lite överkurs)
const isOver18 = (age) => {
    return age > 18;
}

// Strängfunktioner
const greeting = "hejhopp";
console.log(greeting.length);
const word = greeting.substring(3, 7);
console.log("word:", word);

// Få ut tecknet för en viss position i ordet;
const letter0 = greeting[greeting.length-1 ];
console.log("letter0:", letter0);
