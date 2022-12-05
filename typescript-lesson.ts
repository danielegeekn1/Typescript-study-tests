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
