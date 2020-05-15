const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.listen(3000)
console.log('服务器已经启动')

/* 
访问静态资源: 输入http://127.0.0.1:3000/index.html


新建public，存放一些静态资源
express.static()  访问静态资源路径
__dirname 当前根目录路径 ，‘public’是path.join的字符串
*/