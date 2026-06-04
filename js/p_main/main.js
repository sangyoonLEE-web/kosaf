window.addEventListener("load", () => {
  // 메인 슬라이드
  const swiper = new Swiper(".mainSwiper", {
    // 무한 반복
    loop: true,
    // 자동 재생
    autoplay: {
      delay: 3000, // 3초
      disableOnInteraction: false,
    },
    // 전환 속도
    speed: 1000,
  });

  // 지금 찾는 서비스 슬라이드
  var nowSwiper = new Swiper(".nowSwiper", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".now-swiper-button-next",
      prevEl: ".now-swiper-button-prev",
    },

    breakpoints: {
      390: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
    },
  });
});
