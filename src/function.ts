//If parameter is optional put ? infront of the variable

//If u don't return the function it will be void
const add = (x: number, y: number, c?: number): void => {
    const z: number = x + y;
    console.log(z);
  };
  
  // add(1, 2, 3);
  
  const decrease = (a: number, b: number): number => {
    const c: number = a - b;
    return c;
  };
  
  // console.log(decrease(5, 6));
  
  let logger = (): void => {
    console.log("I am logger");
  };
  
  logger();
  add(1, 2, 3);
  
  let loggerTwo = (): void => {
    console.log("I am logger Two");
  };
  
  loggerTwo();
  
  let loggerThree = () : void => {
    console.log("I am logger 🕵️‍♂️");
  }
  
  loggerThree();