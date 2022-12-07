enum Continent {
  Asia = "Asia",
  Africa = "Africa",
  NorthAmerica = "North America",
  SouthAmerica = "South America",
  Europe = "Europe",
  Antartica = "Antartica",
  Oceania = "Oceania",
}
interface Country {
  name: string;
  continent: Continent;
}
const countries: Country[] = [
  {
    name: "Spain",
    continent: Continent.Europe, //we do access them as we'd with normal obj inJS
  },
  {
    name: "Nigeria",
    continent: Continent.Africa,
  },
  {
    name: "Greece",
    continent: Continent.Europe,
  },
  {
    name: "New Zealand",
    continent: Continent.Oceania,
  },
  {
    name: "Colombia",
    continent: Continent.SouthAmerica,
  },
];

console.log(countries);
//the continent values will be displayed as numbers
//because by default enum properties are numbered

//another example
