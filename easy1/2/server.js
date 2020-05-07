
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Tpye','text/plain');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end();
})
server.listen(8080,()=>{
    console.log('没有这也可以，就listen(8080)');
})
console.log('已完成');

