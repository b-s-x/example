const fs = require('fs');
const zlib = require('zlib');

module.exports.fileContent = function(cb) {
  fs.readFile('text.txt', 'utf8', cb)
}

exports.fileWrite = fs.appendFile('text.txt', "I was here\n", 'utf8', err => {
  if(err) throw err
})

const readStream = fs.createReadStream('text.txt', 'utf8');
const writeStream = fs.createWriteStream('text.txt.gz');

const gzip  = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);
