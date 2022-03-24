if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]))
}

let addBasketAll = document.querySelectorAll(".addBasket")
for(let addBasket of addBasketAll){
    addBasket.onclick=function(e){
        e.preventDefault();
        if(localStorage.getItem("basket")==null){
            localStorage.setItem("basket",JSON.stringify([]))
        }
        let basket = JSON.parse(localStorage.getItem("basket"))
        let name =this.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
        let source =this.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");
        console.log(source)
        let id =this.parentElement.parentElement.parentElement.parentElement.getAttribute("data-id");
        let  exictPro = basket.find(p=>p.ID == id)
        if(exictPro===undefined){
            basket.push({
            ID: id,
            Name: name,
            src:source,
            count:1
        });
        }else{
            exictPro.count+=1
        }
        
        localStorage.setItem("basket",JSON.stringify(basket));
        CountBasket();
        
    }
}

function CountBasket(){
    let basket = JSON.parse(localStorage.getItem("basket"))
    document.getElementById("product_count").innerHTML = basket.length;
}
CountBasket();