function identity<Type>(value: Type): Type {
  return value;
}
let output1 = identity("India");
let output2 = identity(100.0);
let output3 = identity(true);
//since we didn't specify the return type of our function, that'll be any by default, and so
//we could then assign to it any kind of type, wether this'll be string, number or boolean as wrote in the example above

//in this case though, whichever it will be the type of value we passed as argument of that function
//typescript will consider it to be any, since we're not modifying the types by passing the arguments
//in order to prevent this and have our type displayed correctly we could add as a tag Type
//which we can then pass to the value and to the function as well

// in this case we'll always have displayed by typescript our type

///generic type in arrow function
const idCards = <Type>(value: Type): Type => value;
//it works the same way, we need to put our type tag before our parameter

//multiple generic types in function
function multipleIdCards<Type1, Type2>(
  value1: Type1,
  value2: Type2
): [value1: Type1, value2: Type2] {
  return [value1, value2];
}
let output4 = multipleIdCards(true, "China");

// in this case we passed to it generic  types that'll be read once passed as argument of our function
//now from output 4 we can see the type typescript inferred and display to us are both a boolean value and a value with type of string

//we could set also explicit  type with this syntax
let output5 = multipleIdCards<boolean, string>(true, "Japan");
// if we'd now try to change the type of that values we passed as argument we'll have an error

interface Currency<Type> {
  currency: Type;
}
type currencyString = Currency<string>;
type currencyObject = Currency<{ name: string; code: string }>;
//in this case we passed our Currency interface with assigned to it an explicit type tag of string into a type alias
//which we then passed to our currentObj1 obj

const currentObj1: currencyString = { currency: "Bath" };
const currentObj2: currencyObject = {
  currency: {
    name: "Bath",
    code: "THB",
  },
};

// In this case in order to modify the obj properties we need to set it to be generic
// then in order to pass the interface with our obj to another variable we need to then specify in the generic tag type we pass
//which type of value we want to return, in our case an obj with name prop with string type, and code property to have a string type as well
//then we could normally use that currency interface accordingly to how we set it

// associating our explicit tag to a type, will make this option to be reusable and will let our code appear more readable as well

//genric types with type aliases

type currencySymbol<Type> = {
  currencySymbol: Type;
};
type genericCurrencyString = currencySymbol<string>;
type genericCurrencyObj = currencySymbol<{ name: string; code: string }>;
const currencySymbolString: genericCurrencyString = { currencySymbol: "£" };
const currencySymbolObj: genericCurrencyObj = {
  currencySymbol: { name: "Indian Rupe", code: "INR" },
};
