const mongoose = require('../../public/javascripts/db.js')

const Schema = mongoose.Schema

const homeSchema = new Schema({
  "name" : Number,
  "sex" : String,
},{ collection: "homeData"})

const MyModal = mongoose.model('homeData', homeSchema);

module.exports = MyModal;