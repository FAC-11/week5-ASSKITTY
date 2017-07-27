const handlers = require('./handlers');

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    handlers.handleHomeRoute(req, res);
  }
  else if (url.includes('public')) {
    handlers.handlePublic(req, res, url);
  }
  else if (url.includes('?date')) {
    handlers.handleDate(req, res, url);
  }
  else {
    res.writeHead(404, 'Content-Type: text/html');
    res.end('<h1>404 not found</h1>');
  }
}

module.exports = router;
