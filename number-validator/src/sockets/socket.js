const io = require("socket.io-client");

const socket = io("http://db-connector:3001");

const sendNumberToServer = (numberInfo) => {
  socket.emit("client:sendNumber", numberInfo);
};

module.exports = sendNumberToServer;
