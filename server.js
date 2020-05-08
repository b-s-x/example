const name = require('./user/person')
const app = require('express')();
const Emitter = require('events');
const fs = require('fs')
const ops = require('./app')

const port = 3000;
const host = '127.0.0.1'

app.use((request, response, next) => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url}`
  fs.appendFile('server.log', data + '\n', (err) => {
    if (err) throw err
  })
  next()
});

app.set('view engine', 'pug');

app.use('/home', (request, response) => {
  response.render('home', {
    title: "You're welcome",
    main: 'Are u alive?'
  })
});

app.use('/home', (request, response) => {
  response.send('Main page');
});

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
