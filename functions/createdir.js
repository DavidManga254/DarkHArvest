const fs = require('fs');
function doubleBackslashes(string) {
  let newString = string.replace(/\\/g, '\\\\'); // use regular expression to replace all occurrences
  newString += '\\\\'; // add two backslashes to the end
  return newString;
}

module.exports.ensureDirectoryExists = function (directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    fs.writeFileSync('./downloadpath.txt', doubleBackslashes(directoryPath), 'utf8');
  }
}
