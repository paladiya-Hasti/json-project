


const display=(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele)=>{
        let title=document.createElement("h2")
        title.innerHTML="title: "+ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let price=document.createElement("h5")
        price.innerHTML="price : "+ele.price

        let cate=document.createElement("h4")
        cate.innerHTML="cate : "+ele.cate


        let div=document.createElement("div")
        div.append(title,img,cate,price)
        div.setAttribute("class","box3")


        document.getElementById(id).append(div)


    })
}
export default display