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

interface mangaInformation {
  mangaTitle: string;
  releaseYear: number;
  author: string;
}
const mangaAndAnimeInfo: mangaInformation[] = [
  {
    mangaTitle: "One Piece",
    releaseYear: 1997,
    author: "Eichiro Oda",
  },
  {
    mangaTitle: "Vagabond",
    releaseYear: 1998,
    author: "Takehiko Inoue",
  },
  {
    mangaTitle: "Rouroni Kenshin",
    releaseYear: 1994,
    author: "Nobuhiro Watsuki",
  },
];
//find method with array to find only the object which has the value of author property to be Eichiro Oda string
const findAuthor = mangaAndAnimeInfo.find((author) => {
  return author.author === "Eichiro Oda";
});
console.log(findAuthor.author);
//filter method to find only the object with releaseYear over 1994
const filterMethod = mangaAndAnimeInfo.filter((manga) => {
  return manga.releaseYear > 1994;
});
console.log(filterMethod);
//for each array method
mangaAndAnimeInfo.forEach((elem) => {
  console.log(`The manga author who will come this year at the comic fair
   is ${elem.author}, and He'll talk about this manga  ${elem.mangaTitle} `);
});

//map method
const mangaInfo = mangaAndAnimeInfo.map((objElem) => {
  return objElem.releaseYear;
});
console.log(mangaInfo);
