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