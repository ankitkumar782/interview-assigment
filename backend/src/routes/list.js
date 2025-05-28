const route=require('express').Router()
const listcontroller=require('../controller/listcontroller')
const threatmiddleware=require('../middleware/threat')

route.use(threatmiddleware.checkurl)
route.post('/submit-threat',listcontroller.addlist)//http://localhost:1000/list/submit-threat

module.exports=route