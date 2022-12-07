//PARTIAL TYPE
interface Country {
  name: string;
  code: string;
  currency: string;
  population: number;
}
const countryA: Country = {
  name: "Spain",
  code: "SP",
  currency: "Euro",
  population: 566_798_999,
};
const countryB: Partial<Country> = {
  name: "Italy",
  code: "IT",
  population: 566_798_999,
};
//in this case we set all the properties of our Country interfaces to be optional with this Partial passed
//to our countryB object
interface Nation {
  name: string;
  code: string;
  currency?: string;
  population?: number;
}
const nationA: Nation = {
  name: "Spain",
  code: "SP",
  currency: "Euro",
  population: 566_798_999,
};
const nationB: Required<Nation> = {
  name: "Italy",
  code: "IT",
  currency: "Euro",
  population: 566_798_999,
};

//in this case though we set in our nation the currency and the population properties to be set to optional
//since we passed the required type in our nationB object, by doing so we declared that each properties in that case must be set to be required
