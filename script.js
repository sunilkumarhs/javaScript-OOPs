'use strict';
// const Person = function (firstNmae, birthYear) {
//   this.firstNmae = firstNmae;
//   this.birthYear = birthYear;

//   //   this.clacAge = function () {
//   //     console.log(2023 - birthYear);
//   //   };
// };

// const sunil = new Person('Sunil Kumar H S', 2000);
// console.log(sunil);
// // const charan = new Person('Charan R', 1999);
// // const seena = new Person('Srinivas', 1999);
// // console.log(charan, seena);

// Person.prototype.calAge = function () {
//   console.log(2023 - this.birthYear);
// };

// sunil.calAge();

// console.log(sunil.__proto__);
// console.log(sunil.__proto__.__proto__);
// console.log(sunil.__proto__.__proto__.__proto__);

// const arr = [2, 4, 5, 6, 5, 7, 6, 8, 9, 2];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);
console.log('Coding Challenge #1');
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(this.make + ' going at ' + this.speed + ' km/h');
};

car.vehicle = function () {
  console.log('These are four wheel vehicles');
};

car.prototype.accelerate = function () {
  console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
};

car.prototype.break = function () {
  console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
};
car.vehicle();
const xuv900 = new car('Mahindra XUV900', 120);
const safari = new car('TATA Safari', 95);

console.log('------------------------------');
xuv900.accelerate();
xuv900.break();
console.log('------------------------------');
safari.accelerate();
safari.break();
console.log('------------------------------');
xuv900.accelerate();
xuv900.break();
console.log('------------------------------');
safari.accelerate();
safari.break();

console.log('//////////////////////////////');
//class expression
// const class1 = class {}
//class decleration
//setters and getters
// class personCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   claAge() {
//     console.log(`Your age is ${2023 - this.birthYear}`);
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert('Enter full Name!');
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   static hey() {
//     console.log('Hello !!!');
//   }
// }

// const sunil = new personCl('Sunil Kumar H S', 2000);

// personCl.prototype.greet = function () {
//   console.log('Welcome ' + this.fullName);
// };

// personCl.hey();
// console.log(sunil);
// sunil.greet();
// sunil.claAge();
// console.log(sunil.age);
// console.log('------------------------------');
// const charan = new personCl('Charan R', 1999);
// console.log(charan);
// console.log(charan.age);

//object.create method of prototype inhertance

// const personPrototype = {
//   claAge() {
//     console.log(`Your age is ${2023 - this.birthYear}`);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sunil = Object.create(personPrototype);
// console.log(sunil);
// sunil.name = 'Sunil';
// sunil.birthYear = 2000;
// sunil.claAge();

// const charan = Object.create(personPrototype);
// charan.init('Charan R', 1999);
// charan.claAge();

console.log('Coding Challenge #2');
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class carClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} going at ${(this.speed += 10)} km/h`);
  }

  break() {
    console.log(`${this.make} going at ${(this.speed -= 5)} km/h`);
  }

  set speedUs(speedVal) {
    this.speed = speedVal * 1.6;
  }

  get speedUs() {
    return `${this.make} traveling at ${this.speed / 1.6} mi/h`;
  }
}

const xuv900cl = new carClass('Mahindra XUV900', 120);
const safaricl = new carClass('TATA Safari', 95);

console.log(xuv900cl);

console.log(xuv900cl.speedUs);
xuv900cl.speedUs = 120;
console.log(xuv900cl);

console.log('------------------------------');
xuv900cl.accelerate();
xuv900cl.break();
console.log('------------------------------');
safaricl.accelerate();
safaricl.break();
console.log('------------------------------');
xuv900cl.accelerate();
xuv900cl.break();
console.log('------------------------------');
safaricl.accelerate();
safaricl.break();

console.log('//////////////////////////////');

//Inheritance of Classes

// const person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// person.prototype.calAge = function(){
//   console.log(`${this.firstName} is ${2023 - this.birthYear} old`);
// }

// const student = function(firstName, birthYear, course) {
//   person.call(this, firstName, birthYear);
//   this.course = course;
// }

// student.prototype = Object.create(person.prototype);

// student.prototype.deatils = function() {
//   console.log(this.firstName+ ' is studying '+ this.course);
// }

// const sunil = new student('Sunil Kumar H S', 2000, 'MCA');

// sunil.deatils();
// sunil.calAge();

// console.log(sunil.__proto__);
// console.log(sunil.__proto__.__proto__);
// console.log(sunil instanceof student);
// student.prototype.constructor = student;

console.log('Coding Challenge #3');
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const EV = function(make, speed, battery) {
  car.call(this, make, speed);
  this.battery = battery;
  console.log(this.make+' going at '+this.speed+ ' km/h, with a charge of '+this.battery+'%');
}
EV.prototype = Object.create(car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.battery = chargeTo;
  console.log('Car battery charged upto '+ this.battery+'%');
}

EV.prototype.accelerate = function() {
  this.speed += 20;
  console.log(`${this.make} is moving at ${this.speed} with a charge of ${this.battery -= 1}%`);
}

const altroz = new EV('TATA AltrozEV', 120, 50);

altroz.accelerate();
altroz.break();
altroz.accelerate();
altroz.break();
altroz.chargeBattery(95);
altroz.accelerate();

// console.log(altroz);
console.log('------------------------------');

//Inheritance of classes 
// class personCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   claAge() {
//     console.log(`Your age is ${2023 - this.birthYear}`);
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert('Enter full Name!');
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   static hey() {
//     console.log('Hello !!!');
//   }
// }

// class studentCl extends personCl {
//   constructor(fullname, birthYear, course) {
//     super(fullname, birthYear);
//     this.course = course;
//   }

//   details() {
//     console.log(this.fullName+ ' is studying '+ this.course);
//   }

//   claAge() {
//     console.log(`I'am ${2023 - this.birthYear} years old !`);
//   }
// }

// const sunil = new studentCl('Sunil Kumar H S', 2000, 'M.C.A');
// sunil.details();
// sunil.claAge();

//Object.create inheritance

// const personPrototype = {
//     claAge() {
//       console.log(`Your age is ${2023 - this.birthYear}`);
//     },
//     init(firstName, birthYear) {
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//     },
//   };

// const studentPrototype = Object.create(personPrototype);

// studentPrototype.init = function(firstName, birthYear, course) {
//   personPrototype.init.call(this, firstName, birthYear);
//   this.course = course;
// }

// studentPrototype.details = function() {
//   console.log(this.firstName+ ' is studying '+ this.course);
// }

// const sunil = Object.create(studentPrototype);
// sunil.init('Sunil Kumar H S', 2000, 'M.C.A');
// sunil.details();
// sunil.claAge();


//Bank Example

class bankAccount {
  constructor(name, currancy, pin) {
    this.name = name;
    this.currancy = currancy;
    this.pin = pin;
    this.movements = [];
    this.local = navigator.language;

    console.log('Thank you for opening account in our bank Mr.'+this.name);
  }

  deposit(val) {
    this.movements.push(val);
    console.log('Your amount Rs.'+val+' has been deposited into your account successfully!');
  }

  withdraw(val) {
    this.deposit(-val);
    console.log('Amount Rs.'+val+' has been withdrawed from your account successfully!');
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if(this.approveLoan(val)) {
      console.log('Loan approved and amount deposited to your account successfully! ');
      this.deposit(val);
    }
  }

}

const sunil = new bankAccount('Sunil Kumar H S', 'INR', 1718);

sunil.deposit(500);
sunil.deposit(1000);
sunil.withdraw(600);
sunil.requestLoan(10000)

console.log(sunil);