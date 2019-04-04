/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding
The default binding of the 'this' keyword. If I use the 'this' keyword outside the context of Implicit, Explicit, or New, then 'this' starts working in a global context. If I'm working in the browser, then 'this' will refer to the window object.

 * 2. Implicit Binding
 When I call a function using dot notation, I am using the Implicit (implied meaning) binding principle.

 * 3. New Binding
In the New Binding Principle, 'this' refers to the object that the construction function creates when its called to do so.

 * 4. Explicit Binding
In the Explicit Binding principle, 'this' refers to whatever I tell it to using .call(), .apply(), or .bind()
 *
 * write out a code example of each explanation above
 */

// Principle 1 - Window Binding
// code examples for Window Binding
function iCanSeeThroughA() {
  console.log(this);
}
iCanSeeThroughA();

// or

function windowSize() {
  let width = this.innerWidth;
  let height = this.innerHeight;
  console.log([height, width]);
}
windowSize();

// Principle 2 - Implicit Binding
// code example for Implicit Binding
let myLaptop = {
  name: "Kathy's MacBook Pro",
  year: 2013,
  operatingSystem: 'Mojave',
  sayOS: function() {
    console.log(this.operatingSystem);
  }
};
myLaptop.sayOS();

// Principle 3 - New Binding
// code example for New Binding
let Pizza = function(size, crust, name) {
  // this = {}
  this.size = size;
  this.crust = crust;
  this.name = name;
};
let yummyPizza = new Pizza('large', 'pan', 'Firey Hawaiian');
console.log(yummyPizza);

// Principle 4 - Explicit Binding
// code example for Explicit Binding
let beHappy = function(verb1, verb2, verb3) {
  console.log(
    `My name is ${this.name} and my favorite thing is ${
      this.favThing
    }. To be happy, you should try and be ${verb1}, ${verb2}, and ${verb3}. As often as possible! `
  );
};

let kathy = {
  name: 'Kathy',
  favThing: 'laughing'
};

let feelings = ['joyful', 'hopeful', 'grateful'];

// .call()
beHappy.call(kathy, feelings[0], feelings[1], feelings[2]);
// .apply()
beHappy.apply(kathy, feelings);
// .bind()
let newFoundJoy = beHappy.bind(kathy, feelings[0], feelings[1], feelings[2]);
console.log(newFoundJoy());
