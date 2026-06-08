window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mobile-btn");
  const navMb = document.querySelector(".mobibe-menu-wrap");
  const menuLinks = document.querySelectorAll(".s-go a");
  const htmlRoot = document.documentElement;
  const icon = mbt.querySelector("i");

  // 스크롤 삭제
  const body = document.body;
  htmlRoot.classList.add("active");
  htmlRoot.classList.remove("active");

  // 햄버거 버튼 클릭
  mbt.addEventListener("click", () => {
    mbt.classList.toggle("ani");
    navMb.classList.toggle("active");
    header.classList.toggle("active");
    htmlRoot.classList.toggle("active");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");
  });

  // 모바일 메뉴 클릭 시 닫기
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mbt.classList.remove("ani");
      navMb.classList.remove("active");
      header.classList.remove("active");
      htmlRoot.classList.remove("active");

      icon.classList.remove("fa-x");
      icon.classList.add("fa-bars");
    });
  });

  // PC 전환 시 초기화
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mbt.classList.remove("ani");
      navMb.classList.remove("active");
      htmlRoot.classList.remove("active");
      header.classList.remove("active");

      icon.classList.remove("fa-x");
      icon.classList.add("fa-bars");
    }
  });
});
