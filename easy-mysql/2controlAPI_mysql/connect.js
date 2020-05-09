
/*  导出query函数----返回：数据库处理结果
        外来参数：sql，params、err、conn
 导入mysql、dbOption
 创建连接池 mysql.createPool
 query函数（sql，参数s）---返回：promise对象
    从连接池获取链接 pool.getConnection(err，conn)----参数：错误信息、创建连接对象
    1、能连接
    2、推送sql语句：conn.query()---返回 结果
*/

const mysql = require('mysql')
const dbOption = require('./db_config')

const pool = mysql.createPool(dbOption)

function query(sql,params){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,conn)=>{
            if(err){
                reject(err)
                return
            }
            conn.query(sql,params,(err,result)=>{
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    })
}

module.exports = query