const express=require('express')
const app=express();
const listroute=require('./src/routes/list')
app.use(express.json())
app.use('/list',listroute)
module.exports=app