const listmodal=require('../model/listmodal');
const { sendmessage } = require('../utils/sendmessage');



exports.addlist=async(req,res,next)=>{
    try{
        console.log(req.body)
        const data={
            url:req.body.url
        }
          const resdata = await new listmodal(data).save();
          console.log(resdata)
                if (resdata) {
                        res.status(200).json(sendmessage("sucess", "inserted", resdata))
                }
                else {
                        res.status(500).json({ error: "error " })
                }
    }
    catch(err){
        if (error.name === "ValidationError") {
                        let errors = {};
                        Object.keys(error.errors).forEach((key) => {
                                errors[key] = error.errors[key].message;
                        });
                        res.status(200).json({ errors });
                }
                else {
                        res.json({ error })
                }

    }
}