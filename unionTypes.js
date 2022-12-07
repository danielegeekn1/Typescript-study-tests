var population1 = 54556778;
var population2 = "Italy";
var population3 = false;
//in this case with that type alias we set an union type which allows both string, number and boolean types
//so it may be applied to all of our variables
function showOutputValue(value) {
    console.log("The value is ".concat(value));
}
//by default if we do not set a type to that parameter that'll be any
//so we could pass to it as argument whicever type value we want
showOutputValue(54556778);
showOutputValue("Asia");
//showOutputValue(false); - since we assigned to the parameter value only string and number value this boolean value will not be allowed to pass
function outputLanguages(languages) {
    if (Array.isArray(languages)) {
        console.log("Languages: ".concat(languages.join(", "))); //that'll be logged on the console only if languages prop we'll pass
        //as argument is an array, wether it's not it'll not display but we'll not get an error
    }
}
outputLanguages(["Thai food", "Japanese food", "Italian food"]);
outputLanguages("English");
//outputLanguages(3_876_999);
//in this case we'll have an error since join is a method avaiable only on arrays
//not on string or number types values
