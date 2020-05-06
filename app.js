const fs = require('fs');

exports.fileContent = fs.readFile('text.txt', 'utf8', (err, data) => {
  if(err) {
    throw err
  }
  console.log(data);
})
