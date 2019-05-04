const router = require('koa-router')()
const UserCon = require('./controller.js')
// router.prefix('/users')

router.post('/register', async (ctx, next) => {
  
  let reqData = ctx.request.body;
  let resData = {};
  if (reqData) {
    resData = await UserCon.register(reqData);
  }
  
  ctx.body = resData;
})

router.post('/login', async (ctx, next) => {
  let reqData = ctx.request.body;
  let resData = {};
  if (reqData) {
    resData = await UserCon.login(reqData);
  }
  ctx.body = resData;
})

module.exports = router
