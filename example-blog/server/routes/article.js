var express = require('express');
var router = express.Router();
const querySql = require('../db/index')

/* 新增博客接口.,与之前接口写法类似 */
router.post('/add', async(req, res, next) =>{
  let { title,comtent} = req.body
  let {username} =req.user
  try {
    let result = await querySql('select id from user where username = ?', [username])
    let user_id = result[0].id
    //插入 insert info 标题、用户id、创建时间
    await querySql('insert info article(title,content,user_id,create_time) values(?,?,?Now())', [title,comtent,user_id])
      res.send({ code: 0, msg: '更新成功',data:null})
  } catch (e) {
    console.log(e)
    next(e)
  }
});

/* 获取全部博客列表接口. */
router.get('/allList', async(req, res, next) =>{
  try {
    // select * from article，格式化时间DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s")对应字段AS
    let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article'
    let result = await querySql(sql)
      res.send({ code: 0, msg: '获取成功',data:result})
  } catch (e) {
    console.log(e)
    next(e)
  }
});

/* 获取我的博客列表接口. */
router.get('/myList', async(req, res, next) =>{
  try {
    //查询当前id的用户名
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql,[username])
    let user_id = user[0].id
    // select * from article，格式化时间DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s")对应字段AS
    let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article'
    let result = await querySql(sql,[user_id]) //多了一个user_id参数
      res.send({ code: 0, msg: '获取成功',data:result})
  } catch (e) {
    console.log(e)
    next(e)
  }
});

/* 获取博客详情接口，不需要token也能看，要添加到白名单*/
router.get('/detail', async(req, res, next) =>{
  let article_id = req.query.article_id
  try {
    let sql = 'select id,title,content,DATE_FORMAT(create_time,"%Y-%m-%d %H:%i:%s") AS create_time from article where id =?'
    let result = await querySql(sql,[article_id]) 
      res.send({ code: 0, msg: '获取成功',data:result[0]})
  } catch (e) {
    console.log(e)
    next(e)
  }
});

//更新博客 接口
router.post('/update', async(req, res, next) =>{
  let { article_id,title,content} = req.body
  let {username} =req.user
  try {
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql, [username])
    let user_id = result[0].id
    let sql = 'update article set title = ?,content = ? where id = ? and user_id = ?'
    let result = await querySql(sql, [title,content,article_id,user_id])
      res.send({ code: 0, msg: '更新成功',data:null})
  } catch (e) {
    console.log(e)
    next(e)
  }
});
//删除博客 接口，与更新接口类似
router.post('/delete', async(req, res, next) =>{
  let { article_id} = req.body
  let {username} =req.user
  try {
    let userSql = 'select id from user where username = ?'
    let user = await querySql(userSql, [username])
    let user_id = result[0].id
    let sql = 'delete from article where id = ? and user_id = ?'
    let result = await querySql(sql, [article_id,user_id])
      res.send({ code: 0, msg: '删除成功',data:null})
  } catch (e) {
    console.log(e)
    next(e)
  }
});

module.exports = router;
