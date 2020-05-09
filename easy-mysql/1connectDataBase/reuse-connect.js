/*    连接池=复用连接，要的就取，不用放回 
创建连接池 mysql.creatPool( db对象配置)
从池内获取连接 getConnection()
释放连接  release()
*/
const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root3306',
    database:'user_test'
})
pool.getConnection((err,conn)=>{
    if(err) throw err
    let sql = 'select * from user where city = ?'
    //执行sql语句
    conn.query(sql,['广州'],(err,result)=>{
        conn.release()
        if(err) throw err
        console.log(result)
    })
})