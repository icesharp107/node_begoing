var express = require('express');
var router = express.Router();

const querySql = require('../db/index')
const { PWD_SALT } = require('../untils/constant')
const { md5 } = require('../untils/index')

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

// 注册接口
router.post('/register', function (req, res, next) {
  let { username, password, nickname } = req.body
  try {
    let user = await querySql('select * from user where username = ?', [username])
    if (!user || user.length === 0) {
      password = md5(`${password}${PWD_SALT}`)
    } else {
      res.send({ code: -1, msg: '该账号注册过' })
    }
  } catch (e) {
    console.log(e)
    next(e)
  }
})

/* 
改造users，关于用户的东西
包括：注册、登录、获取用户信息、上传头像、更新用户信息
注册:检查用户名是否存在
 1、引入 query函数--就行sql操作（sql，params）;别名querySql
 2、try{}catch(e){}
 3、全表搜索，有username字段的记录？
 判断 不存在/长度为0，就是没注册过
  将密码加密 =md5（密码+密钥）
 否则，发送
 3.1 导入md5函数--密码hash加密，（s）
      导入 PWD_SLAT --个人密钥
*/

// 登录接口
router.post('/login', async (req, res, next) => {
  let { username, password } = req.body
  try {
    let user = await querySql()
    if (!user || user.length === 0) {
      res.send({ code: -1, msg: '该账号不存在' })
    } else {
      password = md5(`${password}${PWD_SALT}`)
      let result = await querySql()
      if (!result || result.length === 0) {
        res.send({ code: -1, msg: '账号或者密码不正确' })
      } else {
        
      }
    }
  } catch (e) {
    console.log(e)
    next(e)
  }
})



module.exports = router;
