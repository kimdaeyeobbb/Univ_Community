function copy_to_clipboard() {
  var copyText = document.getElementById("code");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert("방코드가 복사되었습니다.");
}
