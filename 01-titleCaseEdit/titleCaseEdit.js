function titleCaseEdit(title) {
  // Insert code here;
  return title.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;
