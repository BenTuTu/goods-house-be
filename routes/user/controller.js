const UserModal = require('./modal')

class SongsController {
  constructor() {

  }

  login() {
    return new Promise((res, rej) => {
      UserModal.find({}, (err, fulfil) => {
        if (err) {
          rej(err)
        }
        res(fulfil)
      })
    })
  }

  register(data) {
    return new Promise((res, rej) => {
      UserModal.find({}, (err, fulfil) => {
        let msg = '';
        let isExist = false;
        if (err) {
          rej(err)
        }
        console.log('fulfil:', fulfil);

        fulfil.forEach(item => {
          if (item.userName == data.userName) {
            isExist = true;
          }
        });

        if (isExist) {
          msg = "该用户名已存在，请重新输入#_#";
        } else {
          msg = "注册成功-_-";
          let user = new UserModal(data);
          user.save((err, res) => {
            if (err) {
              console.log(err);
              
            } else {
              console.log(res);
            }
          });
        }
        let response = {
          msg: msg,
          isExist: isExist
        }
        res(response)
      });
      
      // MyModal.insert()
    })
  }



}
  
const songsModal = new SongsController();

module.exports = songsModal;