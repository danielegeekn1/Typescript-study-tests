let character = "Mario";
let age = 30;
//IMPORTANT NOTE - THOSE TYPE CAN NOT BE CHANGED IN THE FUTURE IN TYPESCRIPT
let isBlackBelt = false;
// we can by the way change the value, but never the type
character = "Luigi";
age = 40;
isBlackBelt = true;

//PS - IMPORTANT NOTE - Even though we did not specify the tpye of this variables
//it's not necessary since the moment we assing to them a value, then typescript will
//automatically inferr which is the type of that variable
//in our case for example character will be automatically set to a string type

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(4));

//Any type
let country: any = { name: "Italy" };
//we've been able to change this variable type thanks to any type
country.code = "IT";

//unknown type
function outputLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  }
}
outputLength("a string");

//never types
function throwFormattedError(message: string): never {
  throw new Error(`Something went wrong ${message}`);
}
//array types
let names = ["Luigi", "Mario", "Yoshi"];
names.push("toad");
//we could not push a value with a type different from the one we selected
// so we cannot push for example a number
let numbers = [20, 30, 40];
numbers.push(25);

//since initially we set both string types , number types and boolean types
//we can now pass any kind of this types value to our array
let mixed = ["ken", 4, "chun-li", 8, 9, true];
mixed.push("Ryu");
mixed.push(33);
mixed.push(true);

//change our types values in our mixed string
mixed[0] = 3; // the first string type value ken is now overwitten and changed to 3

//array explicit types
let mangaTitles: string[] = [];
mangaTitles = ["One Piece", "Naruto", "Demon Slayer"];

//we could not in this case pass some number types value into that

//PS - IMPORTANT - If we now would push something in this mangaTitles string we would have a warning
//telling us we cannot read property push of undefined, that's because this is initially undefined
//we're only telling that later on it

mangaTitles.push("Berserk"); //now we could have done this since we initialize our variable with an empty array

//objects
let samurai = {
  name: "Goro",
  role: "Shinsegumi",
  age: 30,
};

samurai.age = 40;
samurai.name = "Hannya";

samurai = {
  name: "Kenshin",
  role: "Shogun",
  age: 27,
};
//in this case if i want to modify the whole samurai obj
// i need to recall each prop of that object
//each props has to match its type, which i cannot change in this way

//In this case I could not add another property either,
//it has to match the same props with their same types

//objects example

const cities = {
  city: "TN",
  population: 5_135_300,
};
function displayCitiesDetails(cities) {
  console.log(cities.city.toUpperCase());
  console.log(cities.population * 3);
}
displayCitiesDetails(cities);

// in this case we could use in this function only the existing properties of our country object
//Another way of defining the object types
const citiesOfItaly: { name: string; capital: string; inhabitants: number } = {
  capital: "Rome",
  name: "Italy",
  inhabitants: 1_000_000,
};
//in this case we specified the properties of each property of our obj
//it's not strictyl necessary since typescript will inferr the type accordingly to the value we passed to it
//but that helps to get a cleaner code
function displayCitiesOfItalyDetails(citiesOfItaly: {
  name: string;
  inhabitants: number;
}) {
  console.log(citiesOfItaly.name.toUpperCase());
  console.log(citiesOfItaly.inhabitants * 3);
}
displayCitiesOfItalyDetails(citiesOfItaly);

//defining object with interfaces
interface Nations {
  city: string;
  district: string;
  population: number;
}
const World: Nations = {
  city: "Genova",
  district: "Civita vecchia",
  population: 3_356_890,
};

function displayNations(World: Nations) {
  console.log(World.city.toUpperCase());
  console.log(World.population * 10);
}

displayNations({
  city: "Trento",
  district: "Madonna Bianca",
  population: 10.0,
});
// in this case once we instanciating the obj if we want to invoke the function and assign to it
//different values for its properties, we need to add each one of its props, with their respective types

//defining obj with tpye aliases
type comics = {
  title: string;
  author: string;
  releaseYear: number;
};
const ComicsReleases: comics = {
  title: "One Piece",
  author: "Eichiro Oda",
  releaseYear: 1997,
};

function showComics(ComicsReleases: comics) {
  console.log(ComicsReleases.title.toUpperCase());
  console.log(ComicsReleases.releaseYear);
}
showComics(ComicsReleases);

//explicit types
let mangaCharacter: string;
let mangaCharacterAge: number;
let isGoodOrBad: boolean;

mangaCharacterAge = 40;
isGoodOrBad = true;
mangaCharacter = "Rufy";

//they're called explicit types since we set their types
//we could avoid this and typescript would infer the type according to the value we passed to that specific variable

//explicit union types

let mangaAndBooks: (string | number | boolean)[] = [];
mangaAndBooks.push("Games of Thrones");
mangaAndBooks.push(2.0);
mangaAndBooks.push(true);
//we can push any kind of types we specified at the beginning

console.log(mangaAndBooks);

//explicit union types on simple variables
let bestAnime: string | number; // in this case we do not use ()
bestAnime = "Vagabond";
bestAnime = 1997;

//explicit types on object
let ninjaOne: object;
ninjaOne = { name: "Naruto", age: 14 };
//ninjaOne = []; //that would work because an array is considered a kind of object

let ninjaTwo: { name: string; age: number; beltColor: string };
ninjaTwo = { name: "Yoshi", age: 20, beltColor: "black" }; // in this case it has to match all the value with their types as we set

//optional types
type WorldNations = {
  nation: string;
  spokenLanguage: string;
  inhabitants?: number;
};
const WorlWideSpokenLanguages: WorldNations = {
  nation: "Japan",
  spokenLanguage: "Japanese",
  //inhabitants: 1_000_000_000,
};
//as we mentioned previously it has to match all of the properties and their related set types
//unless we do not set this to be optional with the property modifier as we did above

function logWorldWideSpokenLanguages(WorlWideSpokenLanguages: WorldNations) {
  console.log(
    `The most spoken language in the world is ${WorlWideSpokenLanguages.spokenLanguage} and it's spoken in ${WorlWideSpokenLanguages.nation}`
  );
  if (typeof WorlWideSpokenLanguages.inhabitants === "number") {
    console.log(WorlWideSpokenLanguages.inhabitants * 2);
  }
}

//by adding this condition in our function, also if we still didnt' have our inhabitants props, we'll not receive an error
//that's because it's no longer considered undefined, and at the moment we're setting that property
//this condition will work

logWorldWideSpokenLanguages(WorlWideSpokenLanguages);

//destructuring a type in a function to use only certain properties of it
type mangaAuthor = {
  name: string;
  age: number;
  publishedManga: number;
};
const mangaAndComics: mangaAuthor = {
  name: "Eichiro Oda",
  age: 48,
  publishedManga: 1,
};
function bestMangaAndComics({ name, age }: mangaAuthor) {
  console.log(
    `My favourite manga author is ${name}, He is now ${age} years old`
  );
}

bestMangaAndComics(mangaAndComics);
