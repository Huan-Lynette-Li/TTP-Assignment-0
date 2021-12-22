function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0;
  nums.forEach((number) => {
    count += (number >= start && number <= end) ? 1 : 0;
  })
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
