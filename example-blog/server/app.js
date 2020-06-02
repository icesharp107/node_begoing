var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')  //引入cors
const expressJWT = require('express-jwt') //引入express-jwt
const { PRIVATE_KEY } = require('./untils/constant')

var artRouter = require('./routes/article');
var usersRouter = require('./routes/users');
var commentRouter = require('./routes/comment')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());  //调用cors
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 在路由前使用，expressJWT，会获取toekn>解析,
app.use(expressJWT({
  secret: PRIVATE_KEY
}).unless({
  //白名单，不在名单上的url都要验证
  path: ['/api/user/register', '/api/user/login', '/api/user/upload', '/api/article/allList', '/api/article/detail', '/api/comment/list']
}));

app.use('/api/article', artRouter);
app.use('/api/users', usersRouter);
app.use('/api/comment', commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  //引入express-jwt的错误处理，UnauthorizedError是token错误
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({code:-1,msg:'token验证失败'})
  } else {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
});

module.exports = app;
