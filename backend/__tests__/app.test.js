const app = require("../app");
const mongoose = require("mongoose");
const request = require("supertest");
const { seed } = require("../Data/seed");
const users = require("../Data/testData/usersData");
const events = require("../Data/testData/eventsData");
const { User } = require("../Schemas/userSchema");
const { Event } = require("../Schemas/eventSchema");
require("dotenv").config();

beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL);
    return seed(users, events);
  });
  
  afterAll(() => {
    mongoose.connection.close();
  });

describe("USERS", () => {

    describe("GET /users", () => {
      test("200: should respond with an array of all users", () => {
        return request(app)
          .get("/users")
          .expect(200)
          .then(({ body }) => {
            expect(body.length).toBe(users.length);
            expect(Array.isArray(body)).toBe(true);
          });
      });
      test("200: should return all users, with the following properties: firstName, lastName, email, password, eventData, isStaff", () => {
        return request(app)
                .get("/users")
                .expect(200)
                .then(({ body }) => {
                  body.forEach((user) => {
                    expect(user).toMatchObject({
                      _id: expect.any(String),
                      firstName: expect.any(String),
                      lastName: expect.any(String),
                      email: expect.any(String),
                      password: expect.any(String),
                      eventData: expect.any(Array),
                      isStaff: expect.any(Boolean),
                    });
            });
          });
        });


        

    });
});