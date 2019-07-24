const mongoose = require('mongoose')

const PlaceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number, 
        required: true
    }
},
{
    timestamps: true
})

module.exports =  mongoose.model('Place', PlaceSchema)