//* Type Aliases
//* to solve the complex code and duplicate code

type age = number | string;
type infoObject = {
  id: number;
  name: string;
  age: age;
  email: string;
  job: string;
};

let getInfo = (name: string, age: age): void => {
  console.log(`${name} is ${age} years old`);
};

getInfo("han", 17);

// interface Info {
//   id: number;
//   name: string;
//   age: age;
//   email: string;
//   job: string;
// }

let getFullInfo = (info: infoObject): void => {
  console.log(
    `${info.name} is ${info.age} years old and work as a ${info.job}`
  );
};

let mySelf: infoObject = {
  id: 123456789,
  name: "han",
  age: 17,
  email: "han@gmail.com",
  job: "page admin",
};

getFullInfo(mySelf);

let getFullInfomation = (info: infoObject): void => {
  console.log(
    `${info.name} is ${info.age} years old and work as a ${info.job}`
  );
};
