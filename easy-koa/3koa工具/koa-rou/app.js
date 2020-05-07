/* 开始使用koa-router
的方法 
注册路由：router.register()
注册路由：router.verb()
启动路由：router.routes()
请求错误的逻辑：router.allowMethods()

koa支持配置：动态路径
过程：创建实例、路由、启动路由、监听端口

koa-bodyparser：解析body，解析http，如：表单传递、json、上传文件
koa-xml-body：解析xml数据
*/

const Koa = require('koa');
const router = require('koa-router')(); //创建路由实例 等价于  const router = new require('koa-router')()
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(async (ctx,next)=>{
    console.log();
    await next();
});

router.get('/',async (ctx,next)=>{
    ctx.response.body = `<h1>用koa-router 啊啊啊</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
});
router.get('/hello/:name',async (ctx,next)=>{
    var name = ctx.params.name;  //上下文--参数--中的name
    ctx.response.body = `<h1> 用koa-router,${name}</h1>`
});

//post请求，参数：name、password
router.post('/signin',async (ctx,next)=>{
    var name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
    if(name === 'koa'&& password === '12345'){
        ctx.response.body = `<h1> 用koa-router,${name}</h1>`
    }else{
        ctx.response.body = `<h1>登录失败</h1>
        <p><a href="再尝试一次"></a></p>`;
    }
})

app.use(bodyParser());
app.use(router.routes()); //启动
app.listen(8001);
console.log('app启动，在8001端口');