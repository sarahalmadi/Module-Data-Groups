// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}
console.log(includes([2.9, 3, 5], 3)); // should return true, because 3 is an element of the array
module.exports = includes;
