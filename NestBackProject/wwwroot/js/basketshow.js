let basket = JSON.parse(localStorage.getItem("basket"))
let count = 1;
for(let items of basket){
    let tdN = document.createElement("td");
    let tdImg = document.createElement("td");
    let tdName = document.createElement("td");
    let tdCount = document.createElement("td");
    let tdIc = document.createElement("td");
    let tdId = document.createElement("td")
    tdN.innerHTML = count;
    let proc = document.getElementById("proc");
    proc.innerHTML = count
    count++;
    tdIc.innerHTML=`<i class="fa-solid fa-trash-can trash"></i>`
    let img = document.createElement("img");
    img.setAttribute("src",items.src);
    tdImg.append(img);
    tdId.innerHTML = items.ID
    tdName.innerHTML = items.Name;
    tdCount.innerHTML = items.count;
    let tr = document.createElement("tr");
    tr.append(tdN,tdImg,tdName,tdCount,tdId,tdIc);
    document.querySelector(".table").lastElementChild.append(tr);
    tdName.classList.add("product_des");
    tdId.classList.add("id_sel");
    tdN.classList.add("pro_count");
    tdCount.classList.add("pro_count");
}

let but = document.querySelector(".delete_all")
but.onclick = function(){
    localStorage.clear();
    location.reload();
}
let remove = document.querySelectorAll(".trash");
for(let icon of remove){
    icon.addEventListener("click",function(){
        for(let i=0; i<basket.length; i++){
            if(basket[i].ID==icon.parentElement.previousElementSibling.innerHTML){
                basket.splice(i,1);
                localStorage.setItem("basket",JSON.stringify(basket));
                window.location.reload();
            }
        }
    })
}
