$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });

//   Tab-menu

let tabTop = document.querySelectorAll(".tab-menu div");
let tabCont = document.querySelectorAll(".content .tab_first")
for(let item of tabTop){
    item.onclick = function(){
        let off = document.querySelector(".active");
        off.classList.remove("active");
        this.classList.add("active");
        let item_id = this.getAttribute("data-id")
        for(let cont of tabCont){
            if(item_id == cont.getAttribute("data-id")){
                cont.className=" ";
            }else{
                cont.className = "d-none";
            }
        }
    }
}


// weight

let wei = document.querySelectorAll(".weight_but");
for(let kg of wei){
    kg.onclick = function(e){
        e.preventDefault();
        let set = document.querySelector(".weight");
        set.classList.remove("weight")
        this.classList.add("weight");
    }
}

// counter

let arrowUp = document.querySelector(".upp");
let arrowDo = document.querySelector(".down");
let snum = document.querySelector(".num");
let procou = 1;
arrowUp.onclick = function(){
    procou++;
    snum.innerHTML=procou;
}

arrowDo.onclick = function(){
    if(procou == 1){
        snum.innerHTML = 1
    }else{
        procou--;
    snum.innerHTML=procou;
    }
}

