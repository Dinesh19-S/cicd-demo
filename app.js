const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from CI/CD Pipeline with Jenkins and Docker!');
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
