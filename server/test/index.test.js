const app = require("../src/app");
const session = require("supertest");
const agent = session(app)

describe("Route test", () => {

    describe('GET /rickandmorty/character/:id', () => {
        it('Responds with status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responds to an object with the properties: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("status");
            expect(response.body).toHaveProperty("origin");
            expect(response.body).toHaveProperty("image");
        });

        it('If there is an error, respond with status: 500', async () => {
            await agent.get('/rickandmorty/character/none').expect(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("Correct information: most return: { access: true }", async () => {
            const { body } = await agent.get("/rickandmorty/login/?email=ejemplo@gmail.com&password=hola1234*")
            expect(body.access).toEqual(true)
        })
        
        it("Incorrect information: most return: { access: false }", async () => {
            const { body } = await agent.get("/rickandmorty/login/?email=correoincorrecto@gmail.com&password=contraseniaincorrecta")
            expect(body.access).toEqual(false)
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it("", async () => {

        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("")
    })


})



