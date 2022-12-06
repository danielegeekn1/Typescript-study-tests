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

//extending multiple interfaces
interface NationsInfo {
  readonly nation: string;
  readonly spokenLanguage: string;
  population?: number;
}
interface actualCurrency {
  currency: {
    name: string;
  };
}

interface NationsWithCurrencyAndLanguages extends NationsInfo, actualCurrency {
  languages: string;
}
//in this case we extended multiple interfaces, by simply writing the interfaces we wanted to extend separated by a comma
const nationsInformations: NationsWithCurrencyAndLanguages = {
  nation: "New Zealand",
  spokenLanguage: "English",
  languages: "Spanish",
  population: 445_556_789,
  currency: {
    name: "New Zealand Dollar",
  },
};

//once we passed as type of this constant, the interface which has all the proprerties of the interfaces it extended
//we must as usual match all the properties and their relative types
