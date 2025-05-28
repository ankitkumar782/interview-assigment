    export const addlist = async (formData)=>{
     const res =    await fetch('http://localhost:1000/list/submit-threat',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(formData)

     })
     return await res.json()
}