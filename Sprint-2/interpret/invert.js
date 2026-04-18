// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
console.log(invert({ a: 1 }));
//It returns {'1': 'a'}  the key became the value and the value became the key.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
currentReturnValue = invert({ a: 1, b: 2 });
console.log(currentReturnValue);
//It returns { '1': 'a', '2': 'b' }

// c) What is the target return value when invert is called with {a : 1, b: 2}
targetReturnValue = { 1: "a", 2: "b" };
//It returns { '1': 'a', '2': 'b' }
// c) What does Object.entries return? Why is it needed in this program?
console.log(Object.entries({ a: 1, b: 2 }));
//It returns [ [ 'a', 1 ], [ 'b', 2 ] ]
//Object.enteries() takes an object and turns it into pairs, which makes it the opposite of object.fromEnteries() which takes pairs & turns them into an object.
//source:MDN
// d) Explain why the current return value is different from the target output
//Because we already used the invert function which swaps the key with the value, and the value with the key.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
