const MyModal = require('./modal')

class SongsController {
    constructor() {
  
    }
  
    query() {
      return new Promise((res, rej) => {
        MyModal.find({}, (err, fulfil) => {
          if (err) {
            rej(err)
          }
          res(fulfil)
        })
      })
    }
}
  
const songsModal = new SongsController();

module.exports = songsModal;