const postdata=(url,user)=>{
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"Application/JSON"},
        body:JSON.stringify(user)
    })

}

export default postdata