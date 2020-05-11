const name = require('./user/person')
const app = require('express')();
const Emitter = require('events');
const fs = require('fs')
const ops = require('./app');
const pug = require('pug')

const port = 3000;
const host = '127.0.0.1'

app.use((request, response, next) => {

  const addZero = (i) => {
    if( i < 10) {
      i = "0" + i
    }
  return i
  }

  const now = new Date();
  const hour = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());
  const data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url}`
  fs.appendFile('server.log', data + '\n', (err) => {
    if (err) throw err
  })
  next()
});

const template = (path, cb) => {
  const read = fs.readFile(path, 'utf8', (err, data) => {
    if(err) {
      return console.error(`Error: ${err}`);
    }
    return data
  })

  const fnPugCompile = pug.compile(path);
  const renderPugData = fnPugCompile(fnPugCompile)

  return cb(null, renderPugData)
};


app.use('/home', (request, response) => {
  template( "views/home.pug", (err, script) => {
    if(err) {
      console.error(`Error ${err}`);
    }

    response.end(script);
  });
})

app.get(`/${name.name}`, (request, response) => {
  response.send(`hello ${name.name}!`)
});

app.get('/', function(request, response) {
  response.send('<h1>Home</h1>');
});

app.get('/about', function(request, response) {
  response.send('<h1>About</h1>')
});

app.listen(port, host, () => {
    console.log('Server is listening on 3000 port')
});

let timerLog = setTimeout(function tick() {
  console.log(`Waiting...`);
  timer = setTimeout(tick, 20000);
}, 2000);
