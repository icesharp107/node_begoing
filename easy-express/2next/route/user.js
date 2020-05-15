const express = require('express')

const Ruu = express.Router()

Ruu.get('/list',(req,res)=>{
    res.send('丧失思')
})
Ruu.get('/index',(req,res)=>{
    res.send('ssss')
})

module.exports = Ruu

/* 
创建路由对象实例，uuu
创建 二级路由 

*/