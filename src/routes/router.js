const express = require('express')

const router = express.Router()
const { index, store, show, update, remove } = require('../controller/PlacesController')

router.get('/places', index)
router.post('/places', store)
router.get('/places/:id', show)
router.put('/places/:id', update)
router.delete('/places/:id', remove)

module.exports = router