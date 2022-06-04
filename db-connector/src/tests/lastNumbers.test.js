const request = require("supertest");
const app = require("../app");
const Even = require("../models/Even");
const Odd = require("../models/Odd");

beforeEach(async () => {
  await Even.deleteMany();
  await Odd.deleteMany();
});

const batchOdds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

describe("GET to /lastNumbers", () => {
  test("Should respond with 400 (Bad Request) if we don't send a type", async () => {
    await request(app).get("/lastNumbers").send().expect(400);
  });

  test("Should respond with 400 (Bad Request) if we send a WRONG type", async () => {
    await request(app).get("/lastNumbers").send({ type: "Wrong" }).expect(400);
  });

  test("Should respond with 204 (No content) if it has no records", async () => {
    await request(app).get("/lastNumbers").send({ type: "even" }).expect(204);
  });

  test("Should send me only 1 document with 10 numbers", async () => {
    await Odd.create({ batchOfNumbers: batchOdds });
    const response = await request(app)
      .get("/lastNumbers")
      .send({ type: "odd" })
      .expect(200);

    expect(response.body[0].batchOfNumbers.length).toBe(10);
    expect(response.body.length).toBe(1);
  });
});
