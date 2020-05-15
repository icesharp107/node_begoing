##### 内容
* 1server：写get/post请求
* 2next：中间件处理，一个get请求，多个处理
* 3middleware：express().use()方法处理中间件
* 4scene：use()方法使用场景，路由拦截（登录/网站维护）
* 5errorMiddleware：自定义处理错误的中间件--加入err参数 app.use((err,req,res,next)=>{})
* 6public：express().static()访问静态资源
* 7template：模板引擎渲染 res.render();要app.set() 模板存放地址、默认后缀名

##### 关于express
* 安装express
 * npm install express --save
* 安装body-parser，请求体解析的中间件
 * npm install body-parser 
 * 请求体解析4种方式
    * bodyParser.json(options):解析json数据
    * bodyParser.raw(options):解析Buffrt数据
    * bodyParser.text(options):解析文本数据
    * bodyParser.urlencoded(options):解析UTF-8编码的数据
    * options可选值
        * inflate：deflate解压数据？
        * limit：设请求数据量，，默认100kb
        * type：
        * verify
* 安装模板引擎
  * npm install art-template express-art-template

* express 方法
    * express.json()
    * express.raw()
    * express.Router()
    * express.static()
    * express.text()
    * express.urlencoded()
* App 方法
    * app.all()
    * app.get()、set()、put()
    * app.listen()、use()
    * app.disable() 、disabled()
    * app.enable() 、enabled()
    * app.engine()
    * app.param()、post()、path()
    * app.render()
    * app.route()
* Response方法
    * cookie()、clearCookie()
    * send()、end()、json()、jsonp()
    * links()、location()、format()
    * redirect()、render()、download()、append()、attachment()
* Router 方法
    * use()
    * all()
    * route()
    * param()
    * METHOD()


