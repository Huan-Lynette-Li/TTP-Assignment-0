function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let set = new Set();
  let array = []

  // Adds all the sets in the input args to an array
  for (let i = 0; i < arguments.length; i++){
    array.push(arguments[i])
  }

  // Loops through the array and each set element in the array and adds the values of the sets to a new set
  for (let i = 0; i < array.length; i++){
    for (var elem of array[i]) { 
      set.add(elem); 
    }
  }
  
  // For testing
  console.log(set)
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
