let dbOption

dbOption = {
    connectionLimit:10,
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root3306',
    database:'user_test'
}

module.exports = dbOption

// 导出dbOption对象，里面是db配置
// 最大连接数量：connectionLimit:10