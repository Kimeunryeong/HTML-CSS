// 이미지 클릭 시 모달 창 열기
function openModal(imagePath) {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('modalImg');

  // 모달 창 열기
  modal.style.display = 'block';
  modalImg.src = imagePath;
}

// 모달 창 닫기
function closeModal() {
  const modal = document.getElementById('myModal');

  // 모달 창 닫기
  modal.style.display = 'none';
}

// 모달 바깥 부분 클릭 시 모달 창 닫기
window.onclick = function (event) {
  const modal = document.getElementById('myModal');

  if (event.target === modal) {
    closeModal();
  }
};
// 햄버거 아이콘 클릭 시 메뉴 토글
document.getElementById('burger-icon').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('active');
});