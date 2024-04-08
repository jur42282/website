function hideSidebar() {
  const sidebar =document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function showSidebar() {
  const sidebar =document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

const question = document.querySelectorAll('.question');
question.forEach((q) => {
  q.addEventListener('click', () => {
    q.classList.toggle('active');
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});