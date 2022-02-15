const members = document.querySelector(".room__members");
const temp = ["이루나", "강민지", "김지석", "김루나"]; // 함수 내부에 선언
const memberInput = [];
// 접속상태 알리는 변수 추가
function addMember() {
  const memberText = memberInput.value;

  const member = createMember(memberText);
  members.appendChild(member);
}

function createMember(memberText) {
  const memberRow = document.createElement("li");
  memberRow.setAttribute("class", "room__member");

  const member = document.createElement("div");
  member.setAttribute("class", "room__member--info");

  const img = document.createElement("div");
  img.setAttribute("class", "room__member--img");
  img.innerHTML = '<img src="img/로그인아이콘.svg">';

  const memberName = document.createElement("span");
  memberName.setAttribute("class", "room__member--name");
  memberName.innerText = memberText;

  const host = document.createElement("div");
  host.setAttribute("class", "room__member--host");
  host.innerHTML = '<img src="img/방장.svg">';

  member.appendChild(img);
  member.appendChild(memberName);
  member.appendChild(host);

  memberRow.appendChild(member);
  return memberRow;
}

for (let i = 0; i < temp.length; i++) {
  memberInput.value = `${temp[i]}`;
  addMember();
}
