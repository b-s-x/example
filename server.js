const name = require('./user/person')
const app = require('express')();
const Emitter = require('events');
const fs = require('fs')
const ops = require('./app');
const pug = require('pug')
const timerLog = require('./log/timerLog')

const port = 3000;
const host = '127.0.0.1'


const template = (path, cb) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return cb(err, text)
    }
    const fn = pug.compile(data);
    const text = fn({
      title: 'bsx was here',
      main: 'aloha!'
    });

    cb(null, text)
  })
};

app.use(timerLog);

app.use('/home', (request, response) => {
  template( "views/home.pug", (err, text) => {
    if(err) {
      console.error(`Error ${err}`);
    }
    response.end(text);
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
