const express = require('express')
const bodyParser = require('body-parser')

//创建express实例，---创建服务器
const app = express()
//extended用qs解析字符串？，否则用querystring
app.use(bodyParser.urlencoded({ extended:false }) )
app.use(bodyParser.json()) 

// 简化原始：判断get方法且对应路径
app.get('/',(req,res)=>{
    res.send('hello express !!')
})
app.get('/index',(req,res)=>{
    res.send(req.query) 
    // 输入：http://127.0.0.1:3000/index?id=123&pwd=456
    // 会帮我们解析为 json格式，传递参数
})

app.post('/add',(req,res)=>{
    res.send(req.body)  
})

app.listen(3000)
console.log('服务器已启动')

/* 简单express实例 ，get/post请求
启动 node 1server.js
退出 ctrl+c

app.use()  用中间件
app.use(bodyParser.urlencoded({ extended:false }) ) 得到数据将赋值给req.body

这样post表单请求，
app.use(bodyParser.json())  就可提交json格式
*/