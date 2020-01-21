const request = require(`request`);

function curl(url) {
  request(url, function(error, response, body) {
    if (error) {
      throw error;
    } else {
      process.stdout.write(body);
    }
  });
}

module.exports = curl;
