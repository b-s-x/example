const name = require('./user/person')
const app = require('express')();
const fsOps = require('./app')
const Emitter = require('events')

const port = 3000;
const host = '127.0.0.1'

app.get(`/${name.name}`, (request, response) => {
    if(request.url === '/bsx') {
      response.write(`hello ${name.name}!`)
    }
    response.end()
  })

app.get('/', (request, response) => {
    response.end(`hello!`)
  })

app.listen(port, host, () => {
    console.log('Сервер начал прослушивание запросов на порту 3000')
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
