const receiveNumbers = require("../utils/receiveNumbers");

const sockets = (io) => {
  io.on("connection", (socket) => {
    console.log(`Connected to: ${socket.id}`);
    socket.on("client:sendNumber", (numberInfo) => {
      console.log(
        `The number ${numberInfo.number} was received by WebSockets and its type is ${numberInfo.type}`
      );
      receiveNumbers(numberInfo);
    });
  });
};

module.exports = sockets;
