const fs = require('fs');

module.exports = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data);
    }
  });
};
