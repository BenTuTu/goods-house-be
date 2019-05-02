const router = require('koa-router')()
const HomeCon = require('./controller')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/home', async (ctx, next) => {
  ctx.body = await HomeCon.query()
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
