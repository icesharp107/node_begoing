const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use((req,res,next)=>{
    console.log('第一个中间件，user所有开始地方')
    next()  //没有next，就一直卡在这里
})
app.use('/index',(req,res,next)=>{
    console.log('user第二个中间件')
    next()  
})
app.get('/index',(req,res,next)=>{
    req.name='get'
    console.log('index中间件1，处理1')
    next()  
})
app.get('/index',(req,res,next)=>{
    console.log('index中间件2,处理结束，发送')
    res.send(req.name)
})

app.listen(3000)
console.log('服务器已经启动')

/* 
app.use()
中间件的用法，一直next下一个处理

*/