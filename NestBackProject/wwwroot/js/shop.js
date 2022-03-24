let set = document.querySelectorAll(".sort-by-product")
for(let item of set){
    item.onclick = function(){
        this.lastElementChild.classList.toggle("show");
    }
}

