//classes in Typescript
var inVoice = /** @class */ (function () {
  function inVoice(c, d, a) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  inVoice.prototype.format = function () {
    return ""
      .concat(this.client, " owes \u20AC")
      .concat(this.amount, " for the  ")
      .concat(this.details);
  };
  return inVoice;
})();
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
  return Country;
})();
var Nigeria = new Country("Nigeria", "NG");
Nigeria.addLanguage("Hausa");
Nigeria.addLanguage("Igbo");
Nigeria.addLanguage("Yoruba");
Nigeria.addLanguage("English");
console.log(Nigeria);
