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
var Country = "Spain";
var anotherCountry = "India";
var continent = "";
//Numbers
var year = 1479;
var population = 47450795;
var averageTemperature = 23.6;
//Boolean
var visited = true;
var isSummer = false;
//null
var currency = null;
//undefined
var languages = undefined;
//function
var describeCurrency = function (country, currency, currencySymbol) {
  var description = "The currency of "
    .concat(country, " is the ")
    .concat(currency);
  if (typeof currencySymbol === "string") {
    description += "(".concat(currencySymbol, ")");
  }
  return description;
};
var description = describeCurrency("Spain", "Euro", "€");
console.log(description);
//function signature
//1st example
var greet;
//in this case this variable will be allowed to contain a function, with two parameters with string tpyes, and the retun type of the function is void
//meaning there'll be no return from this function
greet = function (name, greeting) {
  console.log("".concat(name, " says ").concat(greeting));
};
//2nd example
var calc;
calc = function (num1, num2, action) {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};
//3rd example
var logDetails;
logDetails = function (ninja) {
  console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
// in this case we simply passed as argument an obj as we declared in signatures
//but we passed to it an obj we declared outside the function
//if and switch statement types
var spokenLanguages = ["Spanish", "English"];
if (spokenLanguages[0] !== "") {
  console.log(spokenLanguages[0]);
}
var say = "Goodbye";
switch (say) {
  case "Hello":
    console.log("Good morning");
    break;
  case "Goodbye":
    console.log("Au revoir ".concat(say.toUpperCase()));
    break;
}
