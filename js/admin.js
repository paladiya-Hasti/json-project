import postdata from "../api/post.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()



const handledata=(e)=>{
    e.preventDefault()
     let data={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        img:document.getElementById("img").value,
        cate:document.getElementById("cate").value
        
     }
     postdata("http://localhost:3000/productsssss",data)
     console.log(data);
   
}

document.getElementById("form").addEventListener("submit",handledata)