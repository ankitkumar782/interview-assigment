
exports.checkurl = async function (request, response, next) {

    try {
            url=request.body.url
            if(url.includes("666")){
                request.body.threat="notsafe"
                next()
            }
            else{
                request.body.threat="safe"
                next()
            }    
        }
        
    catch (err) {
        response.status(401).json({ status: 'failed', messgae: 'Unauthorized user !!' })

    }
}