const Even = require("../models/Even");
const Odd = require("../models/Odd");

let oddNumbers = [];
let evenNumbers = [];

const receiveNumbers = async (numberInfo) => {
  if (numberInfo.type === "odd") {
    oddNumbers.push(numberInfo.number);
  }

  if (numberInfo.type === "even") {
    evenNumbers.push(numberInfo.number);
  }
  if (oddNumbers.length === 10) {
    try {
      await Odd.create({
        batchOfNumbers: oddNumbers,
      });
      oddNumbers = [];
    } catch (error) {
      console.log(error.message);
    }
  }

  if (evenNumbers.length === 10) {
    try {
      await Even.create({
        batchOfNumbers: evenNumbers,
      });
      evenNumbers = [];
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = receiveNumbers;
