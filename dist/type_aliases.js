"use strict";
let getInfo = (name, age) => {
    console.log(`${name} is ${age} years old`);
};
getInfo("han", 17);
let getFullInfo = (info) => {
    console.log(`${info.name} is ${info.age} years old and work as a ${info.job}`);
};
let mySelf = {
    id: 123456789,
    name: "han",
    age: 17,
    email: "han@gmail.com",
    job: "page admin",
};
getFullInfo(mySelf);
let getFullInfomation = (info) => {
    console.log(`${info.name} is ${info.age} years old and work as a ${info.job}`);
};
