const { Favorite } = require("../models/Favorite.js")

const postFav = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if (!name || !origin || !status || !image || !species || !gender) return res.status(404).send("Missing data");

        await Favorite.findOnCreate({ where: { name, origin, status, image, species, gender } })

        const allFavorites = await Favorite.findAll()
        return res.json(allFavorites)

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
module.exports = postFav
