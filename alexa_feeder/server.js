const http = require('http');
const app = require('./app');
app.use('./assets/css');
http.createServer(app.handleRequest).listen(8000);
