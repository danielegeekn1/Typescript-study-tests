//by extending in this new interface the Country interface, means that now
//CountyWithCurrencies interface will have all Country interface properites and also
//the new one we added to it
var country = {
    name: "New Zealand",
    code: "NZ",
    population: 5135345,
    currency: {
        name: "dollar"
    }
};
var anotherCountry = {
    name: "India",
    code: "IN"
};
function displayCountries(_a) {
    var name = _a.name, _b = _a.population, population = _b === void 0 ? 0 : _b;
    console.log(name.toUpperCase());
    console.log(population * 10);
}
displayCountries(country);
displayCountries(anotherCountry);
