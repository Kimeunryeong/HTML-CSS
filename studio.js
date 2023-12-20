  // 이미지 클릭 시 모달 창 열기
  function openModal(imagePath) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');

    modal.style.display = 'block';
    modalImg.src = imagePath;
  }

  // 모달 창 닫기
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }