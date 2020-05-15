const express = require('express')
const app = express()

const Ruu = require('./route/user')

//创建路由实例对象
const Rou = express.Router()

// 路由对象 Rou---匹配对应--请求地址
app.use('/user',Rou)
app.use('/ruu',Ruu)

// 创建二级路由 
Rou.get('/list',(req,res)=>{
    res.send('访问用户列表')
})
Rou.get('/index',(req,res)=>{
    res.send('访问首页')
})

app.listen(3000)
console.log('服务已启动')

/* 
在一个文件写路由
 Rou  ---> /user
 所以 Rou.get('')  都是---> /user/二级路由
  
可以拆分路由：建好实例对象、二级路由；再统一匹配
  过程：1、创建路由实例对象，创建二级路由
     xxx=express.Router()、  xxx.get('子路由',func())
  2、前端请求地址，匹配 路由对象
       express().use('请求地址'，路由对象)
*/