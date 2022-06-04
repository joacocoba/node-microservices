const app = require("./app");
const http = require("http");
const { Server } = require("socket.io");
const sockets = require("../src/sockets/socket");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

sockets(io);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
