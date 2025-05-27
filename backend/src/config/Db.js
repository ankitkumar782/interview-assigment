const moongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

moongoose.connect(process.env.mongo_url2, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(()=>{console.log("connected")}).catch((err)=>{console.log(err)})