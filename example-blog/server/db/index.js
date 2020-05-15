const mysql = require('mysql')
const dbOption = require('./config')

const pool = mysql.createPoolCluster(dbOption)

let query = function(sql,params){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if(err){
                reject(err)
                return
            }
            conn.query(sql,params,(err,result)=>{
                conn.release()
                resolve(result)
            })
        })
    })
}

module.exports = query

/* 
1、创建连接池
2、获取连接， 
考虑 连接不到报错 if(err){ reject（err） return}
3、执行sql语句 conn.query(sql,params,func)
考虑 失败的话
4、导出：query函数
*/