const countries: (string | number)[] = [
  "China",
  "Italy",
  "Thailand",
  "Greece",
  19,
];
countries.push("Japan", 43);
// we cannot push other element of differn types we did not set in our array

//since we define explicitly the types of our constant to be an array of only string and number types
//we can no longer add other tpyes for example boolean or we'll have an error
