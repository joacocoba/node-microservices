const app = require("../app");
const request = require("supertest");
const sendNumberToServer = require("../sockets/socket");
const classifyNumber = require("../utils/classifyNumber");

const notANumber = {
  number: "1",
};

const aNumber = {
  number: 1,
};

describe("POST to /sendNumber", () => {
  test("Should respond with 400 (Bad Request) when we don't send a number", async () => {
    await request(app).post("/sendNumber").send(notANumber).expect(400);
  });

  test("Should respond with 400 (Bad Request) if we don't send anything", async () => {
    await request(app).post("/sendNumber").send().expect(400);
  });

  test("Should respond with the same number that has been sent", async () => {
    const response = await request(app)
      .post("/sendNumber")
      .send(aNumber)
      .expect(200);

    expect(response.body.number).toBe(aNumber.number);
  });
});

describe("Function Classify Number", () => {
  test("Should return an object with the correct number and type: 'odd' if we send the number 1", () => {
    expect(classifyNumber(1)).toMatchObject({ number: 1, type: "odd" });
  });

  test("Should return an object with the correct number and type: 'even' if we send the number 2", () => {
    expect(classifyNumber(2)).toMatchObject({ number: 2, type: "even" });
  });
});
