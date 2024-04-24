import updatedata from "../api/patch.js"
import postdata from "../api/post.js"


const isexitcart=(data)=>{
    fetch(`http://localhost:3000/cart/${data.id}`)
    .then((res)=>res.json())
    .then ((res)=>{
        // alert("already exits");
        res.qty+=1
        updatedata(res)
    })
    .catch((error)=>{
        console.log(error);
        postdata("http://localhost:3000/cart",data)
    })
    console.log(data);
}
const display=(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele)=>{
        let title=document.createElement("h2")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let price=document.createElement("h5")
        price.innerHTML="price : "+ele.price

        let cate=document.createElement("h4")
        cate.innerHTML="cate : "+ele.cate

        let btn=document.createElement("button")
        btn.innerHTML="DELETE"
        btn.setAttribute("class","del")



        let btn1=document.createElement("button")
        btn1.innerHTML="BUY"
        btn1.addEventListener("click",()=>{
            //postdata("http://localhost:3000/cart",data)
            isexitcart({...ele,qty:1})
        })
        btn1.setAttribute("class","buy")

        let div=document.createElement("div")
        div.append(title,img,cate,price,btn,btn1)
        
        div.setAttribute("class","box3")


        document.getElementById(id).append(div)


    })
}
export default display