const postdata=(url,user)=>{
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    })

}

export default postdata