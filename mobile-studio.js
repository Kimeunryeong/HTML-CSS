// 토글버튼 자바스크립트
// 토글 버튼을 눌렀을 때 네비게이션이 표시/숨김되도록 하는 JavaScript 코드
document.getElementById("nav-toggle").addEventListener("change", function() {
  var nav = document.getElementById("nav");
  nav.style.display = this.checked ? "flex" : "none";
});