
/* 引入koa，创建实例
use是异步写法--中间件
ctx是整合req、res */


const Koa = require('koa');
const app = new Koa();

app.use( async (ctx,next)=>{
    await next();
    ctx.response.body = '<h1>你好，koa2！！</h1>'
});
app.listen(8888);
console.log('app 启动在端口：8888');