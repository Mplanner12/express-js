const http = require("node:http");

// const server = http.createServer();

// server.on("connect", (socket) => {
//   console.log("New Connection");
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("You're on the Home Page");
    res.end();
  }
  if (req.url === "/posts") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("litening at 3000");
