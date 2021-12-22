function pairSum(nums, target) {
  // Insert code here;
  let res = [];
    let indexes = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j] && !indexes.includes(i) && !indexes.includes(j)) {
                res.push([nums[i], nums[j]]);
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return res;
}

// Do not edit this line;
module.exports = pairSum;
