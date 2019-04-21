const mongoose = require('../../public/javascripts/db.js')

const Schema = mongoose.Schema

const musicSchema = new Schema({
  "name" : Number,
  "sex" : String,
},{ collection: "homeData"})

const MyModal = mongoose.model('homeData', musicSchema);

module.exports = MyModal;