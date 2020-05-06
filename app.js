const fs = require('fs');

exports.fileContent = fs.readFile('text.txt', 'utf8', (err, data) => {
  if(err) {
    throw err
  }
  console.log(data);
})

exports.fileWrite = fs.appendFile('text.txt', "I was here\n", 'utf8', err => {
  if(err) throw err
})   

console.log();
