var countries = [
    "China",
    "Italy",
    "Thailand",
    "Greece",
    19,
];
countries.push("Japan", 43);
var bands = [
    {
        name: "Beatles",
        members: 4
    },
    {
        name: "Pink Floyd",
        members: 6
    },
    {
        name: "Queen",
        members: 6
    },
];
var brands = ["Apple, Samsung", "Asus"];
//by default we could modify our array, since we pass only values of the type we set
// in our case string types
//if we do not want this to be modified we can use on our const brand a read only property modifier
var population = ["China", 1000000000];
console.log(population[0]);
