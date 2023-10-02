// Interface is superset of object
// extend
// optional property

interface User {
    readonly id: string;
    name: string;
    email: string;
    phone_number?: number; // if u want to be it's an optinal use ?
    isLoggedIn(): boolean;
    getAge(age: number): number;
  }
  
  interface User {
    isDrive?(status: boolean): string;
  }
  
  interface Admin extends User {
    is_admin: boolean;
  }
  
  let userOne: User = {
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
  
  // console.log(userOne.getAge(17));
  
  let userTwo: User = {
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
  