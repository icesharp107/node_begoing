const crypto = require('crypto')

function md5(s){
    return crypto.createHash('md5').update(String(s)).digest('hex');
}
/* 
 参数的参数，必须是字符串，所以 String(s)
 创建hash对象（指定算法加密） crypto.createHash(''); 
   可以是sha1/256/512、md5
 更新内容指定为 crypto.update(对象)
 */

 module.exports = {
     md5
 }