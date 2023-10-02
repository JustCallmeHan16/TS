//* Classes
class Details {
  name: string;
  private age: number;
  readonly job: string;

  constructor(x: string, y: number, z: string) {
    this.name = x;
    this.age = y;
    this.job = z;
  }

  getDetails(): void {
    console.log(
      `${this.name} is ${this.age} years old and working as a ${this.job}`
    );
  }
}

const testDetails = new Details("mario", 22, "plumber");

let detailArray: Details[] = [];

const wizardDetails = new Details("wizard", 17, "wizard");
const marioDetails = new Details("mario", 30, "plumber");

detailArray.push(testDetails);
detailArray.push(wizardDetails);

wizardDetails.getDetails();
marioDetails.getDetails();
// console.log(detailArray);

detailArray.forEach((detail): void => {
  console.log(detail);
});

console.log(wizardDetails);
