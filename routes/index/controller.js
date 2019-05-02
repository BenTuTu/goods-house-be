const MyModal = require('./modal')

class HomeController {
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
  
const HomeCon = new HomeController();

module.exports = HomeCon;