/* 引入http模块
常见服务器 createServer()
    响应头给请求发送res.writeHead()
    最后给客户端返回 res.end()
    写内容 res.write(),charset设为uft-8能识别中文
监听端口 listen(端口号，地址，函数) */

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html'});
    // res.write('<head><meta charset="utf-8"/></head>')
    // res.write('搭建nodejs服务器成功！！！')
    res.end('<h1> hello world 你好</h1>')
});

server.listen(3000, () => {
    console.log('你已服务成功，监听3000端口:https://localhost:3000')
})