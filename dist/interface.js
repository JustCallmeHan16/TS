"use strict";
let userOne = {
    id: "asdc13dfaex",
    name: "wizard",
    email: "wizard@gmail.com",
    phone_number: 123123123,
    isLoggedIn: () => {
        return true;
    },
    getAge(age) {
        return age;
    },
};
let userTwo = {
    id: "asceadasd7123",
    name: "mario",
    email: "mario@gmail.com",
    phone_number: 123123123,
    isLoggedIn: () => {
        return false;
    },
    getAge(age) {
        return age;
    },
};
console.log(userTwo);
