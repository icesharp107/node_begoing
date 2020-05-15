
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
/* 网站维护
app.usr(()=>{
    res.send('服务器维护')
}) */

// 登录拦截：有isLogin，才能下一步
app.use((req,res,next)=>{
    let isLogin = true
    if(isLogin){
        next()
    }else{
        res.send('需要登录才能访问')
    }
})

app.get('/index',(req,res)=>{
    res.send('登录了')
})
app.use((req,res)=>{
    res.status(404).send('404')  //响应状体404，发送404
}) 

app.listen(3000)
console.log('服务器已经启动')

/* 
登录拦截：有isLogin，直接下一步
没有，跳到下一个use()
 res.status(404)  让页面知道是404，
*/