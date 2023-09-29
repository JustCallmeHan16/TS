// string
let person: string = "han";

// number
let age: number = 17;

// boolean
let isLoggedIn: boolean = true;

// array
let fruits = ["apple", "orange", "mango", "pineapple"];
let numbers = [1, 23123, 123, 32, 125, 45, 13, 1];
console.log(numbers);

// object
let team = {
  name: "wizard",
  passed: true,
  age: 17,
};

team.name = "han";

console.log(team);

// Explicit Types;
let nickName: string;
nickName = "wizard";
nickName = "knight";

let num: number;
num = 10;
num = 15;

let bool: boolean;
bool = true;
bool = false;

// Explicit Types Array

// Union Type
let workers: (string | number | boolean)[];
workers = ["wizard", 25, true];

let labor: (string | number | boolean)[];
labor = [...workers, "truck"];

console.log(labor);

// Explicit Types Object
let personOne: {
  name: string;
  age: number;
  passed: boolean;
  liveIn: string;
};

personOne = {
  name: "han",
  age: 17,
  passed: true,
  liveIn: "Mandalay",
};

//Any Type
let personTwo: any;
personTwo = 10;
personTwo = true;

//array
let mixed: any[];
mixed = ["apple", 17, true];

//object
let human: {
  head: any;
  body: any;
  legs: any;
};

human = {
  head: true,
  body: "medium",
  legs: 2,
};

