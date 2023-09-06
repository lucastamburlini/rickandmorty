const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (res, id) => {

    axios.get(URL + id)
        .then((response) => console.log(response.data))
}

module.exports = {
    getCharById
}