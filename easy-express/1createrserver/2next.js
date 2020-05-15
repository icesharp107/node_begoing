const exprss = require('express')

const app = exprss()

app.get('/index',(req,res,next)=>{
    req.name = 'eric'
    next() //交给下一个去处理
})
app.get('/index',(req,res)=>{
    res.send(req.name)
})

app.listen(3000,()=>{
    console.log('服务器已经启动')
})

/* 中间件
一个get请求，可以多个中间件处理，通过next方法
*/
