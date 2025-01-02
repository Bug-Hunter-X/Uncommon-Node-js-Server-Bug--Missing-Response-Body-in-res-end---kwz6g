const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// This is the uncommon error.  The server will not error out, but it will not handle request. 
// The res.end() is called without sending a response body.  
// In some cases, the client will hang waiting for a response.
// This is very hard to debug as it doesn't throw an error
// A better solution is to always send a response, even if it is an empty response
