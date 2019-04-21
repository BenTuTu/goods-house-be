const router = require('koa-router')()
const songsModal = require('./controller')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/home', async (ctx, next) => {
  console.log(111)
  ctx.body = await songsModal.query()
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
