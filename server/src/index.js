const http = require("http")
const character = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req

    if (url.includes("/rickandmorty/character/")) {
        let urlId = url.split("/").pop()
        let found = character.find(
            character => character.id === Number(urlId)
        )
        res.writeHead(200, {
            "content-type": "text/html",
        });
        res.end(JSON.stringify(found));
    }
}).listen(3001)