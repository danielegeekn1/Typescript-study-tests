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
    var description = "The currency of ".concat(country, " is the ").concat(currency);
    if (typeof currencySymbol === "string") {
        description += "(".concat(currencySymbol, ")");
    }
    return description;
};
var description = describeCurrency("Spain", "Euro", "€");
console.log(description);
