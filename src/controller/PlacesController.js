const Places = require('../models/Place')


index = async (req, res) => {
    const places = await Places.find()
    return res.json(places)
}

store = async (req, res) => {
    const place = await Places.create(req.body)
    return res.json(place)
}

show = async (req, res) => {
    const place = await Places.findById(req.params.id)
    return res.json(place)
}

update = async (req, res) => {
    const place = await Places.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(place)
}

remove = async (req, res) => {
    await Places.findByIdAndDelete(req.params.id)
    return res.send()
}

module.exports = { index, store, show, update, remove }