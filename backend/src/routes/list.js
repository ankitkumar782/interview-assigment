const route=require('express').Router()
const listcontroller=require('../controller/listcontroller')

route.post('/submit-threat',listcontroller.addlist)//http://localhost:1000/list/submit-threat

module.exports=route