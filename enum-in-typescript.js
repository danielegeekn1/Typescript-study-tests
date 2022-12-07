var Continent;
(function (Continent) {
    Continent[Continent["Asia"] = 0] = "Asia";
    Continent[Continent["Africa"] = 1] = "Africa";
    Continent[Continent["NorthAmerica"] = 2] = "NorthAmerica";
    Continent[Continent["SouthAmerica"] = 3] = "SouthAmerica";
    Continent[Continent["Europe"] = 4] = "Europe";
    Continent[Continent["Antartica"] = 5] = "Antartica";
    Continent[Continent["Oceania"] = 6] = "Oceania";
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
