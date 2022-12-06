//THE MAIN DIFFERENCE BETWEEN INTERFACES AND TYPE ALIASES IS THAT INTERFACE MAY EXTENDS OTHER INTERFACES
//WHILE TYPE ALIASES MAY NOT BE EXTENDED

interface Country {
  name: string;
  code: string;
}
interface Country {
  population: number;
}
//as we can notice, by using interfaces we can also redefine our interface properties
//in this case we've added one
const country: Country = {
  name: "Narnia",
  code: "NN",
  population: 560_55_777,
};

//type alias ex
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };
const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
const greetings = (obj: objWithName) => {
  console.log(`${obj.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

//as we can see once we defined our type alias, we can then use it as many time as we want

//this could really helps us avoid code dupliation
