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
