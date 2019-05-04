const UserModal = require('./modal')

class SongsController {
  constructor() {

  }

  login(data) {
    return new Promise((res, rej) => {
      UserModal.find({}, (err, fulfil) => {
        let msg = '';
        let isExist = false;
        let resData = {};

        if (err) {
          rej(err)
        }
        console.log(fulfil);
        
        // 判断账号和密码是否正确
        fulfil.forEach(item => {
          if (item.userName === data.userName && item.password === data.password) {
            isExist = true;
          }
          
        });
        
        // 去除密码返回给前端

        if (isExist) {
          msg = '恭喜登录成功^_^';
          UserModal.findOne({userName: data.userName}, '-password', (err, fulfil) => {
            if (err) {
              rej(err)
            }
            
            resData = fulfil
            console.log(resData);
            let response = {
              msg: msg,
              data: resData,
              isExist: isExist
            }
            res(response);
            
          });
        } else {
          msg = '账号或密码错误，请重新输入';
          res({msg:msg, data:{}, isExist: false});
        }
        
        // let response = {
        //   msg: msg,
        //   data: resData,
        //   isExist: isExist
        // }
        // res(response);

      });
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