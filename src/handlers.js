const fs = require('fs');
const path = require('path');

const handleHomeRoute = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500, 'Content-Type:text/html');
      res.end('<h1>Sorry, this shit is ass</h1>');
    } else {
      res.writeHead(200, 'Content-Type:text/html');
      res.end(file);
    }
  });
};

const handlePublic = (req, res, url) => {
  console.log(url);
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writehead(500, 'Content-Type:text/html');
      res.end('<h1>Soz, no can do</h1>');
    } else {
      res.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      res.end(file);
    }
  });
};

// const handleDate

module.exports = {
  handleHomeRoute,
  handlePublic,
  // handleDate
};
