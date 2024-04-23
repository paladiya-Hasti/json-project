import postdata from "../api/post.js"
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

const isExit=(user)=>{
    fetch(`http://localhost:3000/product?email=${user.email}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length==0){
            postdata("http://localhost:3000/product",user)
        }
        else{
            alert("already exits.......")
        }
    })
}

const handlesign=(e)=>{
    e.preventDefault()

    let user={
        user:document.getElementById("user").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,   
    }
    console.log(user);
    isExit(user)

}

document.getElementById("form").addEventListener("submit",handlesign)