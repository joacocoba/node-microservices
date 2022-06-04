const classifyNumber = (number) => {
  let obj = {
    number,
  };

  if (number % 2 === 0) {
    obj.type = "even";
  } else {
    obj.type = "odd";
  }

  return obj;
};

module.exports = classifyNumber;
