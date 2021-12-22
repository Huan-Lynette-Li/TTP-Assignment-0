function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let count = 0;
  nums.forEach((number) => {
    count += (number % 2 === 0) ? 1 : 0;
  });
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
