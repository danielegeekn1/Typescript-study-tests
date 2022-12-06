//classes in Typescript
class inVoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes €${this.amount} for the  ${this.details}`;
  }
}
const inVoice1 = new inVoice("Mario", "Rent", 450);
const inVoice2 = new inVoice("Luigi", "Loan", 850);
console.log(inVoice1, inVoice2);
console.log(inVoice1.format());
console.log(inVoice2.format());

let invoices: inVoice[] = []; //only classes prop may be passed into this empty array
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
class Country {
  protected readonly name: string = ""; // this is what is required to set this property to be readonly, so this property my not be changed
  protected code: string = "";
  private languages: string[] = [];
  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }
  addLanguage(language: string) {
    this.languages.push(language);
  }
  describeLanguages(): string {
    return `The languages spoken in ${this.name} include ${this.languages.join(
      ","
    )}`;
  }
}
const Nigeria = new Country("Nigeria", "NG");

Nigeria.addLanguage("Hausa");
Nigeria.addLanguage("Igbo");
Nigeria.addLanguage("Yoruba");
Nigeria.addLanguage("English");
console.log(Nigeria);

const description = Nigeria.describeLanguages();
console.log(description);

const italy = new Country("Italy", "IT");
italy.addLanguage("Italian");
console.log(italy);
// if i wanted to add a number type to our language class property, i'd have an error
//since i specified it has the type of array of strings

//In Typescript we must always pay attenction to match the set types properly
class CountryWithCurrency extends Country {
  private currency: Currency;
  constructor(name: string, code: string, currency: Currency) {
    super(name, code);
    this.currency = currency;
  }
  private describeCurrency() {
    return `The currency of ${this.name} is ${this.currency.name} (${this.currency.symbol})`;
  }
  describe(): string {
    let description = `Country description:${this.name}\n`;
    description += this.describeLanguages() + "\n"; //invoking a parent class method
    description += this.describeCurrency(); //invokin the method of our class we're currently in
    return description;
  }
}
interface Currency {
  name: string;
  code: string;
  symbol: string;
}
const colombiaCurrency: Currency = {
  name: "Colombia",
  code: "COD",
  symbol: "€",
};

const Colombia = new CountryWithCurrency("Colombia", "CO", colombiaCurrency);
Colombia.addLanguage("Spanish");
Colombia.addLanguage("English");
console.log(Colombia); //this'll be logged since we have all the properties of the class we extended already
const colombiaLanguages = Colombia.describeLanguages();
console.log(colombiaLanguages);

// const describeColombiaCurrency = Colombia.describeCurrency();
// console.log(describeColombiaCurrency);
const colombiaDescription = Colombia.describe();
console.log(colombiaDescription);

const spain = new Country("Spain", "SP");
spain.addLanguage("spanish");
console.log(spain);
