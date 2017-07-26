const http = require('http');
const router = require('./router');
const port = process.env.PORT || 4000;
const hostname = process.env.HOSTNAME || 'localhost';

const server = http.createServer();

server.listen(port, hostname, () => {
  console.log(`Server is running at port http://${hostname}:${port}`)
});
