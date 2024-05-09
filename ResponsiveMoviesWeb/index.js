let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menu_icon = document.querySelector('.menu-icon');



window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu_icon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
} 

window.onscroll = () =>{
  menu_icon.classList.remove('fa-x');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

  var swiper = new Swiper(".coming-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });