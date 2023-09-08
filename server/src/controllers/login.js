const login = (req, res) => {
    const { email, password } = req.query
    console.log(req);
}

module.exports = {
    login
}