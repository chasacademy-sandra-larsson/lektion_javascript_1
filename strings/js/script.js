/* Strings 3 olika sätt */
const s1 = "hej";
const s2 = 'hej';
const s3 = `hej`;


// Variabler i strängar
const age = 19;
const myName = "Sandra"

// 1. Sträng konkatenering
const greeting = "Hello my name is " + myName + " and is " + age + " years old";
console.log(greeting);

// 2. Template literals
const greeting2 = `Hello my name is ${myName} and is ${age+1} years old`;
console.log(greeting2);