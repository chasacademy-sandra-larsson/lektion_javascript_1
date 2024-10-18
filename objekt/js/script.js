// Objekt
// representera key-value pairs


// CRUD

//Create
const product = {
    name: "mössa",
    quantity: 2,
    price: 199
}

console.log("orginal", product);

// Read
// Punktnotation
const prod1 = product.name;
console.log(prod1);

// Bracketnotation
const prod2 = product["name"];
console.log(prod1);

//Update
product.price = 299;
console.log(product);
product["price"] = 399;
console.log(product)

// Update (add property)
product["inStock"] = true;
console.log(product)


// Delete
delete product.price;
console.log(product)
delete product["inStock"];
console.log(product)



// Nästlade objekt
const userProfile = {
    name: "Alice",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Stockholm",
      country: "Sweden"
    },
    contact: {
      email: "alice@example.com",
      phone: {
        home: "08-1234567",
        mobile: "070-1234567"
      }
    },
    skills: ["JavaScript", "Node.js", "React"]
  };

// Read
console.log(userProfile.address.country);
console.log(userProfile.skills[0])


// Array i objekt
const users = [
    {
      name: "Alice",
      age: 30,
      city: "Stockholm"
    },
    {
      name: "Bob",
      age: 25,
      city: "Göteborg"
    },
    {
      name: "Charlie",
      age: 35,
      city: "Malmö"
    }
  ];

// Read
console.log(users[2].name);


const person = {
    name: "Alice",
    age: 30,
    city: "Stockholm"
  };
  

  // For-in-loop
  for(let key in person) {
    console.log(`${key}: ${person[key]}`);
  }


//const för objekt och arrayer innebär att man får ändra inuti dessa
//men man får inte skriva över hela arrayen eller objektet.