"use strict";
let greeting = (name) => {
    if (name === "wizard") {
        console.log(`Hello I am ${name}`);
    }
    else if (name === "han") {
        console.log(`I am 17 years old and my name is ${name}`);
    }
    else if (name === "mario") {
        console.log(`Hello I am ${name}`);
    }
};
greeting("mario");
var Greet;
(function (Greet) {
    Greet[Greet["wizard"] = 0] = "wizard";
    Greet[Greet["han"] = 1] = "han";
    Greet[Greet["mario"] = 2] = "mario";
})(Greet || (Greet = {}));
let eGreeting = (name) => {
    if (name === Greet.wizard) {
        console.log(`Hello I am wizard`);
    }
    else if (name === Greet.han) {
        console.log(`I am 17 years old and my name is han`);
    }
    else if (name === Greet.mario) {
        console.log(`Hello I am mario`);
    }
};
eGreeting(Greet.wizard);
console.log(Greet.mario);
