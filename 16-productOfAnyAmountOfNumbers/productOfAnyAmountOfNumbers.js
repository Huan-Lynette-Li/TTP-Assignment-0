function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  return args.reduce((prev, curr) => {
    return prev * curr;
  })
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
