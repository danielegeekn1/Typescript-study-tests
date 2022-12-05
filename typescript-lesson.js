function describeCurrency(countryName, currency) {
    return "The currency of ".concat(countryName, " is the ").concat(currency.name, " (").concat(currency.code, ").");
}
var country = {
    name: "New Zealand",
    code: "NZ",
    languages: ["English", "Maori"],
    currency: {
        name: "New Zealand Dollar",
        code: "NZD",
        symbol: "$"
    },
    population: 5135300
};
var description = describeCurrency(country.name, country.currency);
console.log(description);
