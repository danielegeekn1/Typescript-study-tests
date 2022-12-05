/*
 interface Currency {
  name: string;
 code: string;
  symbol: string;
}
 interface Country {
  readonly name: string;
   readonly code: string;
  languages: string[];
  currency: Currency;
  population?: number;
 }
function describeCurrency(countryName: Country["name"], currency: Currency) {
  return `The currency of ${countryName} is the ${currency.name} (${currency.code}).`;
 }
 const country: Country = {
   name: "New Zealand",
  code: "NZ",
  languages: ["English", "Maori"],
   currency: {
   name: "New Zealand Dollar",
    code: "NZD",
    symbol: "$",
  },
   population: 5_135_300,
};
 const description = describeCurrency(country.name, country.currency);
 console.log(description);
*/
//Strings
let Country = "Spain";
let anotherCountry = "India";
let continent = "";
//Numbers
let year = 1479;
let population = 47_450_795;
let averageTemperature = 23.6;

//Boolean
let visited = true;
let isSummer = false;
//null
let currency: null = null;
//undefined
let languages: undefined = undefined;

//function
const describeCurrency = (
  country: string,
  currency: string,
  currencySymbol?: string
) => {
  let description = `The currency of ${country} is the ${currency}`;
  if (typeof currencySymbol === "string") {
    description += `(${currencySymbol})`;
  }
  return description;
};
const description = describeCurrency("Spain", "Euro", "€");
console.log(description);

//function signature
//1st example
let greet: (a: string, b: string) => void;
//in this case this variable will be allowed to contain a function, with two parameters with string tpyes, and the retun type of the function is void
//meaning there'll be no return from this function
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
//2nd example
let calc: (a: number, b: number, c: string) => number;
calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};
//3rd example
let logDetails: (obj: { name: string; age: number }) => void;
// logDetails = (ninja: { name: string; age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };

//4th example
type ninja = { name: string; age: number };
logDetails = (ninja: ninja) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
// in this case we simply passed as argument an obj as we declared in signatures
//but we passed to it an obj we declared outside the function

//if and switch statement types
let spokenLanguages = ["Spanish", "English"];
if (spokenLanguages[0] !== "") {
  console.log(spokenLanguages[0]);
}

let say = "Goodbye";
switch (say) {
  case "Hello":
    console.log("Good morning");
    break;
  case "Goodbye":
    console.log(`Au revoir ${say.toUpperCase()}`);
    break;
}

//for loops in typescript
let spokenLanguagesInEurope = ["Italian", "French"];
for (let i = 0; i < spokenLanguagesInEurope.length; i++) {
  console.log(spokenLanguagesInEurope[i].toUpperCase());
}
