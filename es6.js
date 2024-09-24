const r = 100;
const g = 40;
const b = 255;

const message = `The color is (${getColor()})`;
console.log(message);

//calling a function in a string literal
function getColor() {
    return `(${r}, ${g}, ${b})`;
}

//using arrow functions
const mult = (a, b) => {
    return a * b;
}

const add = (a, b) => a + b;

let result = mult(20, 3);
console.log(result);

//program gets angry here... hmm.
// result = add(10, 3);
// console.log(result);

const divide = (num, den) => {
    if (den === 0) {
        return undefined;
    }
    return num / den;
}

console.log(divide(5,0));

const printMe = msg => console.log(msg);
printMe("Hello, from Node.js!");

const snacks = ["Pie", "Cookies", "Pizza", "Donuts", "Chips", "Watermelon"];

const list = snacks.map(snack => `I love ${snack}!`);

console.log(list);