"use strict";
const add = (x, y, c) => {
    const z = x + y;
    console.log(z);
};
const decrease = (a, b) => {
    const c = a - b;
    return c;
};
let logger = () => {
    console.log("I am logger");
};
logger();
add(1, 2, 3);
let loggerTwo = () => {
    console.log("I am logger Two");
};
loggerTwo();
let loggerThree = () => {
    console.log("I am logger 🕵️‍♂️");
};
loggerThree();
