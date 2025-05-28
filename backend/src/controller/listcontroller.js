const listmodal=require('../model/listmodal');
const { sendmessage } = require('../utils/sendmessage');



exports.addlist=async(req,res,next)=>{
    try{
        
        const data={
            url:req.body.url
        }
        // if(req.body.url.includes('666')){
        //      data={
        //         url:req.body.url,
        //         threatscore:"notsafe"
        //      }
        // }
        // else{
        //       data={
        //         url:req.body.url,
        //         threatscore:"safe"
        //      }  
        // }

        console.log(data)
          await new listmodal(data).save();
          const resdata=await listmodal.find()
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