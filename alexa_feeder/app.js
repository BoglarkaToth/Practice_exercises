let url = require('url');
let fs = require('fs');

function renderHTML(path, res) {
  fs.readFile(path, null, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write('File not found HELLOO!');
    } else {
      res.write(data); // data = index.html
    }
    res.end();
  });
}

module.exports = {
  handleRequest: function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });

    let path = url.parse(req.url).pathname;
    switch (path) {
      case '/':
        renderHTML('./index.html', res);
        break;
      case '/answeres':
        renderHTML('./answeres.html', res);
        break;
      default:
        res.writeHead(404);
        res.write('Route not defined');
        res.end();
    }
  }
};