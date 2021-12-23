function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1) throw "Length of array is not more than 1!";
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++){
      if (i !== j && nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
