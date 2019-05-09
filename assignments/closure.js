// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const simpleCounter = function() {
  let globalCounter = 0;

  return function() { globalCounter += 1; console.log(globalCounter)}()
}

simpleCounter();
simpleCounter();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;

    return privateCounter;
  }

  return () => changeBy(1);
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let privateCounter = 0;

  return {
    increment: () => {
      privateCounter += 1;
      return privateCounter;
    },
    decrement: () => {
      privateCounter -= 1;
      return privateCounter;
    }
  }
};

let test = counterFactory();
console.log(test.increment());
console.log(test.increment());
console.log(test.decrement());

