const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end("Hello, you have reached the custom JS app!");
});

server.listen(PORT, (err) => {
  if (err) {
    throw new Error("Error starting server");
  }
});