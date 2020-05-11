/* 
连接数据库 mongoose.connect()
创建集合规则 new mongoose.Schema()
创建集合 mongoose.model('名称'，规则)
实例
    创建文档 new mongoose.model()
    创建并插入文档 mongoose.model.create()
    保存 new mongoose.model().save()
新版本需要添加，不然出错
useNewUrlParser:true,
userUnifiedTopology:true

*/
const mongoose = require('mongoose')
const schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('连接成功')
}).catch(err=>{
    console.log(err,'连接数据库失败')
})
const userScheam = new schema({
    name:String,
    city:String,
    sex:Number
})

const Model = mongoose.model('user',userScheam)
const doc = new Model({
    name:'eric',
    city:'深圳',
    sex:2
})
doc.save()
Model.create({
    name:'嘻嘻',
    city:'广州',
    sex:1
},(err,doc)=>{
    if(err) throw err
})