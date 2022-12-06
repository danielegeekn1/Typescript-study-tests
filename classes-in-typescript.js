var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes in Typescript
var inVoice = /** @class */ (function () {
    function inVoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    inVoice.prototype.format = function () {
        return "".concat(this.client, " owes \u20AC").concat(this.amount, " for the  ").concat(this.details);
    };
    return inVoice;
}());
var inVoice1 = new inVoice("Mario", "Rent", 450);
var inVoice2 = new inVoice("Luigi", "Loan", 850);
console.log(inVoice1, inVoice2);
console.log(inVoice1.format());
console.log(inVoice2.format());
var invoices = []; //only classes prop may be passed into this empty array
invoices.push(inVoice1);
invoices.push(inVoice2);
//we can only push to this array only element of the created class we passed to it as type
console.log(invoices);
inVoice1.client = "Luca";
inVoice2.amount = 400;
//since we instanciated our class, we created new variable, that'll be public and so we'll be able to
//modify each of their values with dot notations
console.log(inVoice1, inVoice2);
//other class example
var Country = /** @class */ (function () {
    function Country(name, code) {
        this.name = ""; // this is what is required to set this property to be readonly, so this property my not be changed
        this.code = "";
        this.languages = [];
        this.name = name;
        this.code = code;
    }
    Country.prototype.addLanguage = function (language) {
        this.languages.push(language);
    };
    Country.prototype.describeLanguages = function () {
        return "The languages spoken in ".concat(this.name, " include ").concat(this.languages.join(","));
    };
    return Country;
}());
var Nigeria = new Country("Nigeria", "NG");
Nigeria.addLanguage("Hausa");
Nigeria.addLanguage("Igbo");
Nigeria.addLanguage("Yoruba");
Nigeria.addLanguage("English");
console.log(Nigeria);
var description = Nigeria.describeLanguages();
console.log(description);
var italy = new Country("Italy", "IT");
italy.addLanguage("Italian");
console.log(italy);
// if i wanted to add a number type to our language class property, i'd have an error
//since i specified it has the type of array of strings
//In Typescript we must always pay attenction to match the set types properly
var CountryWithCurrency = /** @class */ (function (_super) {
    __extends(CountryWithCurrency, _super);
    function CountryWithCurrency(name, code, currency) {
        var _this = _super.call(this, name, code) || this;
        _this.currency = currency;
        return _this;
    }
    return CountryWithCurrency;
}(Country));
var colombiaCurrency = {
    name: "Colombia",
    code: "COD",
    symbol: "€"
};
var Colombia = new CountryWithCurrency("Colombia", "CO", colombiaCurrency);
Colombia.addLanguage("Spanish");
Colombia.addLanguage("English");
console.log(Colombia); //this'll be logged since we have all the properties of the class we extended already
var colombiaLanguages = Colombia.describeLanguages();
console.log(colombiaLanguages);
