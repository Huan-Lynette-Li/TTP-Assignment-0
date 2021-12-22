function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1) throw "Length of array is not more than 1!";
  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length; b++){
      if (a !== b && nums[a] + nums[b] === target) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
