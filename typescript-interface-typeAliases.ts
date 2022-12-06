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
