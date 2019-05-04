const mongoose = require('../../public/javascripts/db.js')

const Schema = mongoose.Schema

const userSchema = new Schema({
  "userName" : String,
  "password" : String,
  "ownCollection": Array,
  "dynamic": Array,
  "access": Array,
  "fans": Array,
},{ collection: "users"})

const UserModal = mongoose.model('users', userSchema);

module.exports = UserModal;