
* 1、数据库操作
    * config,数据库配置--dbOption对象
    * index，创建连接池>获取连接>执行sql语句 conn.query(sql,params,func)---query函数
* 2、路由操作
    * 原本 app.use('/users', usersRouter); 请求路径/users，对应usersRouter--./routes/user
    * 改一下请求路径 /api/users

    * 前端 npm i axios -S
    * npm install cors -S
        * 在app.js里引入，并调用

    * node取参的3个:body、query、parmas
        * req.body,存放提交的键值对
            >常见post请求
        * req.query,存在路由每个查询字符串参数对象
            >get请求, /search?q=abc+123
            >req.query.q="abc 123"
        * req.params,映射的参数
            >如 route/user/:abc；
            >req.params.name='abc

    * npm install jsonwebtoken -S
    * token
        * header
        * playload 信息
        * signature 签名，将 加密拼接(header+playload)