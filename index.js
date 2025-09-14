// This file serves as the entry point for the application. It may contain the main logic or functionality of the project.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');

  // Stop the server after 5 minutes
  setTimeout(() => {
    server.close(() => {
      console.log('Server stopped after 2 minutes');
    });
  }, 2 * 60 * 1000); // 2 minutes in milliseconds
});
