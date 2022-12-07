var Continent;
(function (Continent) {
    Continent["Asia"] = "Asia";
    Continent["Africa"] = "Africa";
    Continent["NorthAmerica"] = "North America";
    Continent["SouthAmerica"] = "South America";
    Continent["Europe"] = "Europe";
    Continent["Antartica"] = "Antartica";
    Continent["Oceania"] = "Oceania";
})(Continent || (Continent = {}));
var countries = [
    {
        name: "Spain",
        continent: Continent.Europe
    },
    {
        name: "Nigeria",
        continent: Continent.Africa
    },
    {
        name: "Greece",
        continent: Continent.Europe
    },
    {
        name: "New Zealand",
        continent: Continent.Oceania
    },
    {
        name: "Colombia",
        continent: Continent.SouthAmerica
    },
];
console.log(countries);
//the continent values will be displayed as numbers
//because by default enum properties are numbered
//another example
