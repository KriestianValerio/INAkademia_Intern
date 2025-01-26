const mongoose = require('mongoose')

const ImageStoringSchema = new mongoose.Schema({})

const Image = mongoose.model('image', ImageStoringSchema);

module.exports = Image;