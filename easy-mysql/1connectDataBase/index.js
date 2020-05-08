/* 
创建连接 mysql.createConnection() --配置：地址、端口号、用户、密码、库名，返回一个对象
启动连接 connect()
关闭连接  end() 
发送sql语句  query()
  query(sql,(err,row,filed)=>{}) ,函数返回：错误信息、返回结果--数组、解释--数组
*/
const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root3306',
    database:'user_test'
});
conn.connect();
// let sql = 'select * from user where name = ? and city = ?'
// ['eric1','广州']

// 找id名
let sql = 'select * from user where id = ?';
//执行slq语句
conn.query(sql,[4],(err,result)=>{
    if(err) throw err
    console.log(result)
});
conn.end()