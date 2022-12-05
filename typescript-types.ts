let character = "Mario";
let age = 30;
//IMPORTANT NOTE - THOSE TYPE CAN NOT BE CHANGED IN THE FUTURE IN TYPESCRIPT
let isBlackBelt = false;
// we can by the way change the value, but never the type
character = "Luigi";
age = 40;
isBlackBelt = true;

//PS - IMPORTANT NOTE - Even though we did not specify the tpye of this variables
//it's not necessary since the moment we assing to them a value, then typescript will
//automatically inferr which is the type of that variable
//in our case for example character will be automatically set to a string type

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(4));
