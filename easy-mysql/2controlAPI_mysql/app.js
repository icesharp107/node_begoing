
const http = require('http')
const routeH = require('./route')
const url = require('url')

const getPostData = (req)=>{
    return new Promise((resolve,reject)=>{
        if(req.method !== 'POST'){
            resolve({})
            return
        }
        let postDate = ''
        req.on('data',chunk =>{
            postDate +=chunk
        })
        req.on('end',()=>{
            if(postDate){
                resolve(JSON.parse(postDate))
            }else{
                resolve({})
            }
        })
    })
}
const server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    res.writeHead(200,{ 'content-type':'application/json;charset=UTF-8' })
    getPostData(req).then((data)=>{
        req.body = data
        let result = routeH(req,res)
        if(result){
            result.then(resultData =>{
                res.end(JSON.stringify(resultData))
            })
        }else{
            res.writeHead(404,{ 'content-type':'text/html' })
            res.end('404')
        }
    })
})
server.listen(3000,()=>{
    console.log('服务已启动，监听3000端口')
})

/* 
启动服务器 http.createServer()
监听 .listen()

getPostData函数--返回Promise对象
then(data) 
*/