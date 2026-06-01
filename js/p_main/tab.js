window.addEventListener("load", () => {
  const tabBtn = document.querySelectorAll(".tab-btn");
  const tabCon = document.querySelectorAll(".n-tab-con");

  tabBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // 버튼 active 제거
      tabBtn.forEach((item) => item.classList.remove("active"));

      // 콘텐츠 active 제거
      tabCon.forEach((item) => item.classList.remove("active"));

      // 클릭한 버튼 active
      btn.classList.add("active");

      // 같은 순서의 콘텐츠 active
      tabCon[index].classList.add("active");
    });
  });
});