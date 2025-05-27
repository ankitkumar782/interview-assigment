const dotenv=require('dotenv')
dotenv.config();
const app=require('./app')
require("./src/config/Db")

app.listen(process.env.portno,()=>{
    console.log(process.env.portno)
})