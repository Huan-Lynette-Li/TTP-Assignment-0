function countOfAllBooleans(arr) {
  // Insert code here;
  let result = [];
 for(let i = 0; i < arr.length; i++) {
     if (arr[i] === true || arr[i] === false ) {
         result.push(arr[i]);
     }
 }
 return result.length;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
