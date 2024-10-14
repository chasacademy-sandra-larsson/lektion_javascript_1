/* Boolean (sant eller falskt) */
debugger;
let myBool = true;
console.log("myBool", myBool);
myBool = false;
console.log("myBool", myBool);

// Jämförelseoperatorer:
const age = 65;

const isYouth = age < 18;
console.log("isYouth", isYouth);

const isSenior = age >= 65;
console.log("isSenior", isSenior);

let is18 = age == 18;
console.log("is18", is18);

is18 = age === '18'; // Kollar både likhet och datatypslikhet. Best practice att använda denna kontroll med ===
console.log("is18", is18);

// - Likhet (==): Används för att kontrollera om två värden är lika.
// - Olikhet (!=): Används för att kontrollera om två värden inte är lika.
// - Strikt likhet (===): Kontrollerar likhet, men inkluderar även datatypskontroll.
// - Strikt olikhet (!==): Kontrollerar olikhet, inklusive datatypskontroll.
// - Större än (>): Används för att kontrollera om ett värde är större än ett annat.
// - Mindre än (<): Används för att kontrollera om ett värde är mindre än ett annat.
// - Större än eller lika med (>=): Används för att kontrollera om ett värde är större än eller lika med ett annat.
// - Mindre än eller lika med (<=): Används för att kontrollera om ett värde är mindre än eller lika med ett annat.


// Är kunden medlem?
let isMember = true;

// Kunden har seniorrabatt om den är medlem samt är senior
const isQualifiedForSeniorDiscount = isMember && isSenior; // Båda måste vara sanna för att uttrycket är sant
console.log("isQualifiedForSeniorDiscount", isQualifiedForSeniorDiscount);

const isQualifiedForYouthDiscount = isMember && isYouth;
console.log("isQualifiedForYouthDiscount", isQualifiedForYouthDiscount);

// En av dessa måste vara sanna för att kunden måste få någon typ av rabatt
const isQualifiedForAnyDiscount = isMember || isYouth || isSenior;
console.log("isQualifiedForAnyDiscount", isQualifiedForAnyDiscount);

// Negation
//isMember = !isMember;
//console.log("isMember", isMember)

// Logiska operatorer:
// - Och (&&): Används för att kontrollera om båda uttrycken är sanna.
// - Eller (||): Används för att kontrollera om minst ett av uttrycken är sant.
// - Inte (!): Används för att invertera ett booleskt värde (sant blir falskt och vice versa).

// if/else if/else 
if(isQualifiedForSeniorDiscount) {
    console.log("Du får senriorabatt")
} 
else if(isQualifiedForYouthDiscount) {
    console.log("Du får ungdomsrabatt")
}
else if(isQualifiedForAnyDiscount) {
    console.log("Du har rabatt eftersom du är medlem på något sätt")
}
else {
    console.log("Du har ingen kundrabatt");
}


// Controlflow 
// Hur programmet styrs, alltså i vilken ordning och på vilket sätt olika delar av koden körs. 
// programmet flyttar sig från en instruktion till en annan, beroende på olika villkor och strukturer.
// Använd debugger i consolen.