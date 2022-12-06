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
  readonly name: string = ""; // this is what is required to set this property to be readonly, so this property my not be changed
  code: string = "";
  languages: string[] = [];
  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }
  addLanguage(language: string) {
    this.languages.push(language);
  }
}
const Nigeria = new Country("Nigeria", "NG");

Nigeria.addLanguage("Hausa");
Nigeria.addLanguage("Igbo");
Nigeria.addLanguage("Yoruba");
Nigeria.addLanguage("English");
console.log(Nigeria);
