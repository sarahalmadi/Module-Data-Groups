//const salaries = [10, 20, 30, 40, 60, 80, 80];
//const median = calculateMedian(salaries);

//console.log(salaries, "<--- salaries input before we call calculateMean");
//const mean = calculateMean(salaries);

//console.log(`The median salary is ${median}`);
//console.log(`The mean salary is ${mean}`);
//Since the Median Salary has 7 items, then, middleIndex = Math.floor(7/2) = 3, which means the median salary is 40. The mean salary is (10 + 20 + 30 + 40 + 60 + 80 + 80) / 7 = 320 / 7 = 45.71
//list.splice(3, 1) will remove the item at index 3 (which is 40) and return the removed item into an array.
//[0] is going to extract the value from the returned array, so median will be 40.
test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]); // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
});
