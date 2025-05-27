exports.sendmessage=function(...param){
    return{
        status:param[0],
        message:param[1],
        data:param[2]??[]
    }
}