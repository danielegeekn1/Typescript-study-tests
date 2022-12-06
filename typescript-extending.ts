interface Country {
  readonly name: string;
  readonly code: string;
  population?: number;
}
interface CountryWithCurrencies extends Country {
  currency: {
    name: string;
  };
}
//by extending in this new interface the Country interface, means that now
//CountyWithCurrencies interface will have all Country interface properites and also
//the new one we added to it

const country: CountryWithCurrencies = {
  name: "New Zealand",
  code: "NZ",
  population: 5_135_345,
  currency: {
    name: "dollar",
  },
};
const anotherCountry: Country = {
  name: "India",
  code: "IN",
};
function displayCountries({ name, population = 0 }: Country) {
  console.log(name.toUpperCase());
  console.log(population * 10);
}

displayCountries(country);
displayCountries(anotherCountry);
