class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let low = 0, high = nums.length - 1;
    let found = false;
    let mid;
    
    while (!found && low <= high) {
      mid = Math.floor((low + high) / 2);
      
      if (nums[mid] === target) { 
        found = true;
      } else if (nums[mid] > target){ 
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return found;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
