/* swiper 코드 */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 코드 복사 */
function copy_to_clipboard() {
  var copyText = document.getElementById("code");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert("방코드가 복사되었습니다.");
}
