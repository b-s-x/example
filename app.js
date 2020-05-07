const fs = require('fs');

module.exports.fileContent = function(cb) {
  fs.readFile('text.txt', 'utf8', cb)
}

exports.fileWrite = fs.appendFile('text.txt', "I was here\n", 'utf8', err => {
  if(err) throw err
})
