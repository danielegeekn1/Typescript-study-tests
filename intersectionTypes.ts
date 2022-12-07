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
