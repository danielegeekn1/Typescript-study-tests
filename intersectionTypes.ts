interface Country {
  name: string;
}
interface Climate {
  desert: boolean;
}
const describe = (country: Country & Climate) => {
  console.log(`Country name is ${country.name}`);
  console.log(`Country has a desert climate ${country.desert}`);
};
describe({ name: "Nigeria", desert: true });
describe({ name: "New Zealand", desert: false });
describe({ name: "Narnia", desert: false });

//intersection types applied to an object
interface Nations {
  name: string;
  code: string;
}
interface NationsData {
  languages: string[];
  population: number;
}
type CountryWithData = Nations & NationsData;
const Greece: CountryWithData = {
  name: "Greece",
  code: "GR",
  languages: ["Greek"],
  population: 456_666_987,
};
