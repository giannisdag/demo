const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello how you doing';
});

app.listen(3001);