const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios")

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios(`${URL}/${id}`);
        const { data } = response;

        if (data) {
            const { id, status, name, species, origin, image, gender } = data;
            const character = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            };
            res.status(200).json(character)
        } else {
            res.status(404).send('Character not found');
        }
    } catch (error) {

        console.error(error);
        res.status(500).send({ message: error.message });

    }

}


module.exports = {
    getCharById
}

/* const axios = require("axios")

const getCharById = (res, id) => {

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.data)
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin?.name,
                image: data.image,
                status: data.status
            }

            return res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch(error => {
            return res
                .writeHead(500, { "Content-type": "text/plain" })
                .end(error.message)
        })
}


module.exports = { getCharById } */

