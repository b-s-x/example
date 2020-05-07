const name = require('./user/person')
const app = require('express')();
const fsOps = require('./app')
const Emitter = require('events')

const port = 3000;
const host = '127.0.0.1'

app.get(`/${name.name}`, (request, response) => {
  response.send(`hello ${name.name}!`)
  })

app.get('/', function(request, response) {
  response.send('<h1>Home</h1>')
  })

app.get('/about', function(request, response) {
  response.send('<h1>About</h1>')
  })


app.listen(port, host, () => {
    console.log('Server is listening on 3000 port')
  })


fsOps.fileContent((data, err) => {
  if(err) {
    let emitter = new Emitter();
    emitter.on('err', (err) => {
      console.error("Something broken");
    });

    emitter.emit('err', new Error('Very sad!:('))


  }
  console.log(data);
})
