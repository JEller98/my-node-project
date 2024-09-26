//initialize an array
const rgb = [200, 100, 55];

//assign the array contents to individual variables; this is array destructuring.
const [red, green, blue] = rgb;

console.log(`The shade of red is ${red}`);

//spacer
console.log("-------------------------------------");

//destructuring can be done to objects too.
const monitor = {
    resolution: "1980x1080",
    refresh: 60,
    size: 24,

    //nested object
    brand: {
        company: "Dell",
        line: "Silver Line"
    }
}

const {resolution, brand} = monitor;
console.log(`The resolution is ${resolution}`);
//funky output here, nested objects don't like string template literals!
console.log(`The brand is ${brand}`);

//spacer
console.log("-------------------------------------");

const point = {
    x: 1.0,
    y: 2.3,
    z: -1.2
};

//you can destructure parameters that are passed into a function. The x, y and z here are the ones defined in any class you pass in!
function printPoint({x, y, z}) {
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
    console.log(`z: ${z}`);
}

printPoint(point);