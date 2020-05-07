
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/',async (ctx,next)=>{
    ctx.body = '开始使用koa-router，配置路由';
});

router.get('/hello/:name',async (ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello,${name}!</h1>`
});
app.use(router.routes(),router.allowedMethods());