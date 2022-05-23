const fs = require('fs');
const path = require('path');
const link = path.join(__dirname, 'text.txt');
const createFile = fs.createWriteStream(link);

console.log('Enter your message');
process.stdin.pipe(createFile);
process.stdin.resume();

process.on('SIGINT', () => {
  process.stdout.write('Bye');
  process.exit();
});

process.stdin.on('data', (data) => {
  let exit = data.toString().trim();
  if (exit === 'exit') {
    process.stdout.write('Bye');
    process.exit();
  }
});
