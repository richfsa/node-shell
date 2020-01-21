const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const echo = require('./echo');
const date = require('./date');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 3) === 'cat') {
    cat(cmd.slice(4), done);
  } else if (cmd.slice(0, 4) === 'curl') {
    curl('https://' + cmd.slice(5), done);
  } else if (cmd.slice(0, 4) === 'echo') {
    echo(cmd.slice(5), done);
  } else if (cmd === 'date') {
    date(done);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >');
  }
});

const done = output => {
  process.stdout.write(output);
};
