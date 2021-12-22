function frequencyCounter(word) {
  // Insert code here;
  let count = {};
  word.split('').forEach(function(character) {
     count[character] ? count[character]++ : count[character] = 1;
  });
  return count;
  
}

// Do not edit this line;
module.exports = frequencyCounter;
