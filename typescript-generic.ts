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
