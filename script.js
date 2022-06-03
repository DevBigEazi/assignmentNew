//LATEST ASSIGNMENT

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// const SUV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }


// SUV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// SUV.prototype.accelerate = function() {
//     this.speed = this.speed + 20;
//     this.charge = this.charge - 2;

    // console.log(`${this.make} is goint at ${this.speed} with the battery percentage at ${this.charge}%`)
// }

// const bmwSUV = new SUV('BMW SUV', 140, 46);
// console.log(bmwSUV)
// bmwSUV.accelerate()
// bmwSUV.accelerate()
// bmwSUV.accelerate()
// bmwSUV.accelerate()

/**
 * ASSIGNMENT
 * 1. Convert the code above (Function Constructor) to ES6 Class
 * 2. Create another instance of volvoSUV with speed of 130 at charge of 58%
 * 3. Write *brake* method in ES6 👇
 *      a. Speed will reduce by 10
 *      b. Charge will increase by 1
 * 4. Chain these two methods together to see the battery charge percentages
 * 
 * HINT: Don't forget to return *this* from each method...😏
 * 
 * You are FREE to create as many additional instances to the two above as you wish.
 * 
 * Goodluck 🍀
 */


// SOLUTION

/** 1 */
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed
    }
}


const bmw = new Car('BMW', 120)
console.log(bmw);

class SUV extends Car {
    constructor(make, speed, charge){
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery (chargeTo){
        this.charge = chargeTo;
    }

    accelerate (){
        this.speed = this.speed + 20;
        this.charge = this.charge - 2;

        return console.log(`${this.make} is goint at ${this.speed} with the battery percentage at ${this.charge}%`);
    }

    /** 3 & 4 */
    calBrake (){
        this.speed = this.speed - 10;
        this.charge = this.charge - 1;
        return console.log(`${this.make} speed is reduced and it is now going at ${this.speed} with the battery percentage at ${this.charge}%`);
    }
}


const bmwSUV = new SUV('BMW SUV', 140, 46);
console.log(bmwSUV);
bmwSUV.accelerate();
bmwSUV.accelerate();
bmwSUV.calBrake();
bmwSUV.accelerate();
bmwSUV.accelerate();
bmwSUV.accelerate();
bmwSUV.calBrake();


/** 2 */
const volvoSUV = new SUV('volvoSUV', 125, 54);
console.log(volvoSUV);
volvoSUV.accelerate();
volvoSUV.accelerate();
volvoSUV.calBrake();
volvoSUV.accelerate();
volvoSUV.accelerate();
volvoSUV.accelerate();
volvoSUV.calBrake();

