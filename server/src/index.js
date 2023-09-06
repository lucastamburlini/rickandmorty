const http = require("http");
const character = require("./utils/data");
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req

    if (url.includes("/rickandmorty/character/")) {
        let urlId = url.split("/").pop()
        let found = character.find(
            character => character.id === Number(urlId)
        )
        res.writeHead(200, {
            "Content-Type": "application/json",
        }).end(JSON.stringify(found));
    }
}).listen(PORT)