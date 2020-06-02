var express = require('express');
var router = express.Router();

const querySql = require('../db/index')
const { PWD_SALT,PRIVATE_KEY,EXPIRESD } = require('../untils/constant')
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
        let token = jwt.sign({username},PRIVATE_KEY,{expiresIn:EXPIRESD})
        res.send({code:0,msg:'登录成功',token:token})
      }
    }
  } catch (e) {
    console.log(e)
    next(e)
  }
})

/* 
与登录类似：（username，passward）
sql语句查询>判断用户是否存在>存在,用户名与密码一致吗>是，给token
 将密码加密 =md5（密码+密钥）
 token = jwt.sign签名方法：用户名+个人密钥+有限期
          {username},PRIVATE_KEY,{expiresIn:EXPIRESD}的签名函数
          private_key 密钥
          expiresIn是有限期：60*60*24一天
*/

//获取用户信息接口
router.post('/info', function (req, res, next) {
  let { nickname,head_img } = req.body
  let {username} = req.user
  try {
    let user = await querySql('update user set nickname = ?,head)img = ? where username = ?', [username])
      console.log(result)
      res.send({ code: 0, msg: '更新成功',data:null})
  } catch (e) {
    console.log(e)
    next(e)
  }
})

module.exports = router;
