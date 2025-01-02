const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  // ...
  res.end(''); // Always send a response, even if it's empty
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});