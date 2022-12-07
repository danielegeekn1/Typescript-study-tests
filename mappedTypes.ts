//index signature
type Currency = {
  [key: string]: string;
};
const currency: Currency = {
  name: "United States Dollar",
  code: "USD",
  symbol: "$",
  available: "yes",
};

//map type
type CountryData = {
  languages: string[];
  population: number;
};
type Available<Type> = {
  +readonly [Property in keyof Type]+?: boolean; //this'll make all properties we're mapping readonly and optionals
};
const availableCountryData: Available<CountryData> = {
  languages: true,
  population: false,
};
//in this case the syntax for our mapped type is a little difference, what we're saying is
//wether is the passed properties or the properties that'll be passed, it has to have a type of Type in this case
//which is the generic type which allows us to then pass other values types
