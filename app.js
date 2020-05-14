const fs = require('fs');
const zlib = require('zlib');
const Emitter = require('events')


const fileContent = function(cb) {
  fs.readFile('text.txt', 'utf8', cb)
}

exports.fileWrite = fs.appendFile('text.txt', "I was here\n", 'utf8', err => {
  if(err) throw err
})

const readStream = fs.createReadStream('text.txt', 'utf8');
const writeStream = fs.createWriteStream('text.txt.gz');

const gzip  = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

fileContent((data, err) => {
  if(err) {
    let emitter = new Emitter();
    emitter.on('err', (err) => {
      console.error("Something broken");
    });

    emitter.emit('err', new Error('Very sad!:('))

  }
  console.log(data);
})

let timerLog = setTimeout(function tick() {
  console.log(`Waiting...`);
  timer = setTimeout(tick, 20000);
}, 2000);
