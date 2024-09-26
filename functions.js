//practice with higher-order functions

//this has one parameter, so it doesn't need parentheses around str. This also returns str.toUpperCase implicitly.
const converter = str => str.toUpperCase();

//this one reverses a string; similar syntax to converter.
const reverser = str => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
           result = str[i] + result;
    }
    return result;
}

//this calls the converter method and passes "Hello, world!" into it.
console.log(converter("Hello, world!"));

const backwards = reverser("SDEV 372");
console.log(backwards);

//spacer
console.log("-------------------------------------");

//this one is a higher-order function; functions are a first-order datatype in JS.
//it's higher-order because it accepts a function as a parameter.
function stringFactory(func, string) {
    const result = func(string);
    return result;
}

//let's use the factory to change a string
console.log(stringFactory(reverser, "Josh"));

//spacer
console.log("-------------------------------------");

const names = ["Jared", "Keegan", "Melanie", "Daniel"];
names.forEach(item => {
    console.log("Arrow function called!");
    console.log(item);
});

//spacer
console.log("-------------------------------------");

const letters = names.map(item => item[0]);
console.log(letters);

//spacer
console.log("-------------------------------------");

//forEach is done in-place, while map passes the data to a copy.
console.log(names.map(reverser));