function pwd() {
  process.stdout.write(`Current directory: ${process.cwd()}`);
}

module.exports = pwd;
