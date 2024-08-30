var swiper = new Swiper(".mySwiper", {
    effect:'slide',
    speed:2000,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    autoplay:{
        delay:3000,
    },
  });

  //mobile menu 

let mobileMenuIcon=document.querySelector('header .fa-bars');
let menu=document.querySelector('header .menu');

mobileMenuIcon.addEventListener('click',function(){
   menu.classList.toggle("open");
})