"use strict";
class Details {
    constructor(x, y, z) {
        this.name = x;
        this.age = y;
        this.job = z;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and working as a ${this.job}`);
    }
}
const testDetails = new Details("mario", 22, "plumber");
let detailArray = [];
const wizardDetails = new Details("wizard", 17, "wizard");
const marioDetails = new Details("mario", 30, "plumber");
detailArray.push(testDetails);
detailArray.push(wizardDetails);
wizardDetails.getDetails();
marioDetails.getDetails();
detailArray.forEach((detail) => {
    console.log(detail);
});
console.log(wizardDetails);
