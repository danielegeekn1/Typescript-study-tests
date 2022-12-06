var character = "Mario";
var age = 30;
//IMPORTANT NOTE - THOSE TYPE CAN NOT BE CHANGED IN THE FUTURE IN TYPESCRIPT
var isBlackBelt = false;
// we can by the way change the value, but never the type
character = "Luigi";
age = 40;
isBlackBelt = true;
//PS - IMPORTANT NOTE - Even though we did not specify the tpye of this variables
//it's not necessary since the moment we assing to them a value, then typescript will
//automatically inferr which is the type of that variable
//in our case for example character will be automatically set to a string type
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(4));
//Any type
var country = { name: "Italy" };
//we've been able to change this variable type thanks to any type
country.code = "IT";
//unknown type
function outputLength(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
}
outputLength("a string");
//never types
function throwFormattedError(message) {
    throw new Error("Something went wrong ".concat(message));
}
//array types
var names = ["Luigi", "Mario", "Yoshi"];
names.push("toad");
//we could not push a value with a type different from the one we selected
// so we cannot push for example a number
var numbers = [20, 30, 40];
numbers.push(25);
//since initially we set both string types , number types and boolean types
//we can now pass any kind of this types value to our array
var mixed = ["ken", 4, "chun-li", 8, 9, true];
mixed.push("Ryu");
mixed.push(33);
mixed.push(true);
//change our types values in our mixed string
mixed[0] = 3; // the first string type value ken is now overwitten and changed to 3
//array explicit types
var mangaTitles = [];
mangaTitles = ["One Piece", "Naruto", "Demon Slayer"];
//we could not in this case pass some number types value into that
//PS - IMPORTANT - If we now would push something in this mangaTitles string we would have a warning
//telling us we cannot read property push of undefined, that's because this is initially undefined
//we're only telling that later on it
mangaTitles.push("Berserk"); //now we could have done this since we initialize our variable with an empty array
//objects
var samurai = {
    name: "Goro",
    role: "Shinsegumi",
    age: 30
};
samurai.age = 40;
samurai.name = "Hannya";
samurai = {
    name: "Kenshin",
    role: "Shogun",
    age: 27
};
//in this case if i want to modify the whole samurai obj
// i need to recall each prop of that object
//each props has to match its type, which i cannot change in this way
//In this case I could not add another property either,
//it has to match the same props with their same types
//objects example
var cities = {
    city: "TN",
    population: 5135300
};
function displayCitiesDetails(cities) {
    console.log(cities.city.toUpperCase());
    console.log(cities.population * 3);
}
displayCitiesDetails(cities);
// in this case we could use in this function only the existing properties of our country object
//Another way of defining the object types
var citiesOfItaly = {
    capital: "Rome",
    name: "Italy",
    inhabitants: 1000000
};
//in this case we specified the properties of each property of our obj
//it's not strictyl necessary since typescript will inferr the type accordingly to the value we passed to it
//but that helps to get a cleaner code
function displayCitiesOfItalyDetails(citiesOfItaly) {
    console.log(citiesOfItaly.name.toUpperCase());
    console.log(citiesOfItaly.inhabitants * 3);
}
displayCitiesOfItalyDetails(citiesOfItaly);
var World = {
    city: "Genova",
    district: "Civita vecchia",
    population: 3356890
};
function displayNations(World) {
    console.log(World.city.toUpperCase());
    console.log(World.population * 10);
}
displayNations({
    city: "Trento",
    district: "Madonna Bianca",
    population: 10.0
});
var ComicsReleases = {
    title: "One Piece",
    author: "Eichiro Oda",
    releaseYear: 1997
};
function showComics(ComicsReleases) {
    console.log(ComicsReleases.title.toUpperCase());
    console.log(ComicsReleases.releaseYear);
}
showComics(ComicsReleases);
//explicit types
var mangaCharacter;
var mangaCharacterAge;
var isGoodOrBad;
mangaCharacterAge = 40;
isGoodOrBad = true;
mangaCharacter = "Rufy";
//they're called explicit types since we set their types
//we could avoid this and typescript would infer the type according to the value we passed to that specific variable
//explicit union types
var mangaAndBooks = [];
mangaAndBooks.push("Games of Thrones");
mangaAndBooks.push(2.0);
mangaAndBooks.push(true);
//we can push any kind of types we specified at the beginning
console.log(mangaAndBooks);
//explicit union types on simple variables
var bestAnime; // in this case we do not use ()
bestAnime = "Vagabond";
bestAnime = 1997;
//explicit types on object
var ninjaOne;
ninjaOne = { name: "Naruto", age: 14 };
//ninjaOne = []; //that would work because an array is considered a kind of object
var ninjaTwo;
ninjaTwo = { name: "Yoshi", age: 20, beltColor: "black" }; // in this case it has to match all the value with their types as we set
var WorlWideSpokenLanguages = {
    nation: "Japan",
    spokenLanguage: "Japanese"
};
//as we mentioned previously it has to match all of the properties and their related set types
//unless we do not set this to be optional with the property modifier as we did above
function logWorldWideSpokenLanguages(WorlWideSpokenLanguages) {
    console.log("The most spoken language in the world is ".concat(WorlWideSpokenLanguages.spokenLanguage, " and it's spoken in ").concat(WorlWideSpokenLanguages.nation));
    if (typeof WorlWideSpokenLanguages.inhabitants === "number") {
        console.log(WorlWideSpokenLanguages.inhabitants * 2);
    }
}
//by adding this condition in our function, also if we still didnt' have our inhabitants props, we'll not receive an error
//that's because it's no longer considered undefined, and at the moment we're setting that property
//this condition will work
logWorldWideSpokenLanguages(WorlWideSpokenLanguages);
var mangaAndComics = {
    name: "Eichiro Oda",
    age: 48,
    publishedManga: 1
};
function bestMangaAndComics(_a) {
    var name = _a.name, age = _a.age;
    console.log("My favourite manga author is ".concat(name, ", He is now ").concat(age, " years old"));
}
bestMangaAndComics(mangaAndComics);
