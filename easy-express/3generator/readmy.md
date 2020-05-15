
* 新建server文件夹
* 安装 Express 生成器
    * 新的：npx express-generator
    * 旧的：npm install -g express-generator
        * express
    * 能用的命令行参数：express -h 
* morgan 是日志中间件，操作


* 安装依赖：npm install
* 启动项目：npm start
    * 方便日后操作，热更新
    * 将"start": "node ./bin/www"，改为"start": "nodemon ./bin/www"
* 遇到的问题[参考地址](https://blog.csdn.net/qq_39165556/article/details/89333028)
    * 追踪修复：npm audit fix
    * 补漏洞和缺陷：npm audit