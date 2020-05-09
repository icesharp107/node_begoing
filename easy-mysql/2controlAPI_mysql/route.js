
const url = require('url')
const {getUserList,addUser,delectUser,updateUser} = require('./user')

function handleRequest(req,res){
    let urlObj = url.parse(req.url,true)
    if(urlObj.pathname === '/api/getUserList' && req.method === 'GET'){
        let resultDate = getUserList(urlObj.query)
        return resultDate;
    }
    if(urlObj.pathname === '/api/addUser' && req.method === 'POST'){
        let resultDate = addUser(req.body)
        console.log(resultDate,'index.js')
        return resultDate;
    }
    if(urlObj.pathname === '/api/delectUser' && req.method === 'POST'){
        let resultDate = delectUser(urlObj.query.id)
        return resultDate;
    }
    if(urlObj.pathname === '/api/updateUser' && req.method === 'POST'){
        let resultDate = updateUser(urlObj.query.id,req.body)
        return resultDate;
    }
}
module.exports = handleRequest 

/* 
 导出 handleRequest函数--处理请求
    返回 resultDate
 获取用户列表，urlObj.query
 删除用户，urlObj.query.id
 添加用户，req.body
 更新=添加/删除，urlObj.query.id,req.body
*/