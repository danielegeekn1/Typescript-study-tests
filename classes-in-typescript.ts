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
