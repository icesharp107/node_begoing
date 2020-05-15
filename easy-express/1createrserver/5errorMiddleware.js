
const express = require('express')
const bodyParser = require('body-parser')
const fs =require('fs')

const app = express()
//举例2 读取文件，有错误就传递给下一个 专门处理err的中间件
app.get('/index',(req,res,next)=>{
     fs.readFile('./1server.js','utf-8',(err,result)=>{
        if(err){
            next(err)
            return;
        }else{ res.send(result) }
     })
})

//举例1
/* app.get('/index',(req,res)=>{
    throw new Error('故意抛出错误')
}) */

//专门处理error的中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})
//自定义404
app.use((req, res) => {
    res.status(404).send('404 不存在的')
})

app.listen(3000)
console.log('服务器已经启动')

/* 
当我 输入网址 127.0.0.1:3000/， 404

当我 输入网址 127.0.0.1:3000/index
例子1：就会抛出错误，经过error中间件处理
例子2：读取文件
*/