const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  console.log('req', req.url);

  const filePath = '.' + req.url;
  if(filePath == './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = 'text/html';


})
