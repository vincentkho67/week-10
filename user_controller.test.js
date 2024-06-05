const request = require("supertest")
const app = require("./app")

const secret_key = "secret"
const request_user_register = {
    email: "hallo@email.com",
    password: "admin",
    name: "haha"
}

let user_id = 0
describe("GET /users/register", () => {
    test("should register a user", async () => {
        return request(app)
            .post("/users/register")
            .send(request_user_register)
            .expect(201)
            .then(({body})=>{
            user_id = body.id
            })
    });
});

// login -> token

// const token = 
describe("GET /users/:id", () => {
    let test_email = request_user_register.email
    test('should return one user', async () => {
        return request(app)
            .get(`/users/${user_id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .then(({body}) => {
                if (test_email == body.email) {
                    console.log("mantap")
                }
            })
    });
});