var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop:true
  });
  var swiper = new Swiper(".game-list", {
    slidesPerView: 5,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });