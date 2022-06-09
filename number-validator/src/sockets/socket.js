const io = require("socket.io-client");

// When using docker-compose we have to uncomment this line, and comment the 7th line, because I couldn't set the socket.io URL with environment variables in docker.
// const socket = io("http://db-connector:3001");

const socket = io("http://localhost:3001");

const sendNumberToServer = (numberInfo) => {
  socket.emit("client:sendNumber", numberInfo);
};

module.exports = sendNumberToServer;
