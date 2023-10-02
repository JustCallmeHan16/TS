//* what is enum ?
//* enum can make u easy to read the code and understand easily

//* normal arraow function without enum
let greeting = (name: "wizard" | "han" | "mario"): void => {
  if (name === "wizard") {
    console.log(`Hello I am ${name}`);
  } else if (name === "han") {
    console.log(`I am 17 years old and my name is ${name}`);
  } else if (name === "mario") {
    console.log(`Hello I am ${name}`);
  }
};

greeting("mario");

//* with enum
enum Greet {
  wizard, //0
  han, //1
  mario, //2
}

let eGreeting = (name: 0 | 1 | 2): void => {
  if (name === Greet.wizard) {
    console.log(`Hello I am wizard`);
  } else if (name === Greet.han) {
    console.log(`I am 17 years old and my name is han`);
  } else if (name === Greet.mario) {
    console.log(`Hello I am mario`);
  }
};

eGreeting(Greet.wizard);
console.log(Greet.mario);
