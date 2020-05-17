const fs = require('fs');

function timerLog (request, response, next) {

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

  fs.appendFile('./log/server.log', data + '\n', (err) => {
    if (err) throw err
  })
  next()
};

module.exports = timerLog;
