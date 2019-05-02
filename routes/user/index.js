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

router.get('/bar', async (ctx, next) => {
  ctx.body = 'this is a users/bar response';
})

module.exports = router
