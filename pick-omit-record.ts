interface Country {
  name: string;
  code: string;
  currency: string;
  population: number;
}
// type countryPreview = Pick<Country, "name" | "code">;
type countryPreview = Omit<Country, "currency" | "population">;
const countryPreview: countryPreview = {
  name: "India",
  code: "IN",
};

const country1: Country = {
  name: "Italy",
  code: "IT",
  currency: "€",
  population: 145_567_876,
};
//with pick method we choose which properties we want to use( only the properties we want to use)
//with omit method we choose which properties we want to omit ( only the one we do not want to use)
