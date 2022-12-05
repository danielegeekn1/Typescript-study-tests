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
