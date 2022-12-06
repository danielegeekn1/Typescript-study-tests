const countries: (string | number)[] = [
  "China",
  "Italy",
  "Thailand",
  "Greece",
  19,
];
countries.push("Japan", 43);
// we cannot push other element of differn types we did not set in our array

//since we define explicitly the types of our constant to be an array of only string and number types
//we can no longer add other tpyes for example boolean or we'll have an error
interface bandsProperties {
  name: string;
  members: number;
}
const bands: bandsProperties[] = [
  {
    name: "Beatles",
    members: 4,
  },
  {
    name: "Pink Floyd",
    members: 6,
  },
  {
    name: "Queen",
    members: 6,
  },
];

const brands: readonly string[] = ["Apple, Samsung", "Asus"];

//by default we could modify our array, since we pass only values of the type we set
// in our case string types

//if we do not want this to be modified we can use on our const brand a read only property modifier
type countryPopulation = [string, number];
const population: countryPopulation[] = [
  ["China", 1_000_000_000],
  ["Narnia", 3_000_000_000],
];
console.log(population[0]); // this'll return only China
console.log(population);
