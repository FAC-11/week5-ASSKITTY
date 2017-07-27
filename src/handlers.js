const fs = require('fs');
const path = require('path');
const apiRequest = require('./apiRequest');
const extractData = require('./extract-data');

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
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(500, 'Content-Type:text/html');
      res.end('<h1>Soz, no can do</h1>');
    } else {
      res.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      res.end(file);
    }
  });
};

const handleDate = (req, res) => {
  const searchDate = req.url.split("").splice(7,8).join("");
  const timeId = req.url.split("").splice(19,3).join("");
  console.log(searchDate);
  console.log(timeId);
  //call api function
  apiRequest(searchDate, (err, resp) => {
    let formattedData = extractData(resp);
    formattedData.id = timeId;
    console.log(formattedData);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(formattedData));
  });
}

module.exports = {
  handleHomeRoute,
  handlePublic,
  handleDate,
};
