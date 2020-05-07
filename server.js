const name = require('./user/person')
const app = require('express')();
const fsOps = require('./app')

const port = 3000;
const host = '127.0.0.1'

app.get('/', (request, response) => {
    response.end(`hello ${name.name}!!!`)
  })
app.listen(port, host, () => {
    console.log('Сервер начал прослушивание запросов на порту 3000')
  })

console.log(`hello ${name.name}!`);

fsOps.fileContent((data, err) => {
  if(err) {
    throw err;
  }
  console.log(data);
})
