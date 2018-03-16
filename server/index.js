const express = require('express')
const mongoose = require('mongoose')


//链接
const DB_URl = 'mongodb://127.0.0.1:27017/shiliangDB';
mongoose.connect(DB_URl).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('DB数据链接成功')
     },
    err => { 
        /** handle initial connection error */ 
        console.log('DB数据链接错误')
    }
);

/**
 * 类似于 mysal 的表 mongo 里有文档、字段的概念
 */

//相当于新建了一个表，定义一个表结构
const User = new mongoose.Schema({ 
    name: {type:String,require:true}, 
    dec: {type:String,require:true},
});
const Products = new mongoose.Schema({
    name: { type: String, require: true },
});
//定义一个文档模型
const UserList = mongoose.model('UserList', User);
const ProductLIst = mongoose.model('ProductLIst', Products);

UserList.create({
    name:'shiliangl',
    dec:'gogoogog12'
},function (err,doc) {
    if (err) {
        console.log('添加错误')
    }else{
        console.log('添加成功',doc)
    }
})
ProductLIst.create({
    name:'shiliangl',
    dec:'gogoogog12'
},function (err,doc) {
    if (err) {
        console.log('添加错误')
    }else{
        console.log('添加成功',doc)
    }
})

const app = express()

app.get('/',(req,res)=>{
    UserList.find({},(err,doc)=>{
        if (err) handleError(err);
        res.json(doc)
    })
    // res.send('你好express后台,')
})


//错误处理
function handleError(err) {
    console.log(err)
};

app.listen(8090, (req,res)=>{
    console.log('服务器已经启动')
})