const Koa = require('koa');
const Router = require('koa-router'); // router = require('koa-router')();
const mongoose = require('mongoose')

// 实例化
const app = new Koa();
const router = new Router();

// 连接数据库
mongoose
    .connect('数据库url',{})
    .then(()=>{
        console.log('已连接mongoose...');
    })
    .catch((err)=>{
        console.log(err);
    })

// 路由跳转
router.get('/',async ctx=>{
    ctx.body = {msg:'koa的接口!'};
})

// 启动
app.use(router.routes());
app.use(router.allowedMethods());

const port = 5000;
app.listen(port,()=>{
    console.log(`服务器启动在${port}!`);
})