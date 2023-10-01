const getApp = (req, res) => {
    res.status(200).json({ message: "hola App" })
}

module.exports = {
    getApp
}