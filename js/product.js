import getdata from "../api/get.js";
import navbar from "../components/navbar.js";
import display from "../components/uimaker.js";
document.getElementById("navbar").innerHTML=navbar()

let get=async()=>{
    let data=await getdata("http://localhost:3000/productsssss")
    // console.log(data);
    display(data,"box")
}
get()


