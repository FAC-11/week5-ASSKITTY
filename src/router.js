const fs = require('fs');
const path = require('path');
const handlers = require('./handlers');

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500, 'Content-Type:text/html');
        res.end("<h1>Sorry, this shit is ass</h1>");
      } else {
        res.writeHead(200, 'Content-Type:text/html');
        res.end(file);
      }
    })
  }
}

module.exports = router;
