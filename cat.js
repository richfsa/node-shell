const fs = require('fs');

function cat(fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('prompt > ');
    }
  });
}
module.exports = cat;
