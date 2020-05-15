const express = require('express')
const path = require('path')

const app = express()

// 注册模板，名为art
app.engine('art',require('express-art-template'))

// 设模板存放位置，view指数组/视图函数，名值对
app.set('views',path.join(__dirname,'views'))

//设默认的模板后缀名
app.set('view engine','art')

app.get('/index',(req,res)=>{
    res.render('index',{ 
        msg:'访问首页',
        abc:'模板：你已渲染好页面了'
    })
})

app.listen(3000)
console.log('服务器已经启动')

/* 
res.render()  渲染页面
app.set() 
set有好几个设置，键值对方式
 ‘case sensitive routing’ 布尔--区分大小写
 ‘env’ 字符串---环境
 ‘etag’
 ‘jsonp callbakc name’ 字符串--默认jsonp回调
 ’json escape‘ 布尔--从res.json？
 ’json replacer‘
 ’json spaces‘
 ’query parser‘
 ’strict routing‘ 布尔
 ’subdomain offset‘ 数字
 ’trust proxy‘
 ’views‘ 数组/字符串---目录
 ’view cache‘
 ’view engine‘ 字符串---默认模板扩展名
 ’x-powered-by‘ 布尔
*/