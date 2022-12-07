var describe = function (country) {
    console.log("Country name is ".concat(country.name));
    console.log("Country has a desert climate ".concat(country.desert));
};
describe({ name: "Nigeria", desert: true });
describe({ name: "New Zealand", desert: false });
describe({ name: "Narnia", desert: false });
