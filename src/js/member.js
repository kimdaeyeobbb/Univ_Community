/*
  멤버를 눌렀을 때 나타나는 기능은 방장만 이용 가능
  멤버 객체가 가질 요소 생각하기
    이름, 프로필, 방장여부, 접속상태, (영구퇴장?)
*/

const members = document.querySelector('.room__members');

function createMember(memberText, isHost) {
  const memberRow = document.createElement('li');
  memberRow.setAttribute('class', 'room__member');

  const member = document.createElement('div');
  member.setAttribute('class', 'room__member--info');

  const img = document.createElement('div');
  img.setAttribute('class', 'room__member--img');
  img.innerHTML = '<img src="images/로그인아이콘.svg">';

  const memberName = document.createElement('span');
  memberName.setAttribute('class', 'room__member--name');
  memberName.innerText = memberText;

  const host = document.createElement('div');
  host.setAttribute('class', 'room__member--host');

  member.appendChild(img);
  member.appendChild(memberName);

  memberRow.appendChild(member);

  if (isHost) {
    host.innerHTML = '<img src="images/방장.svg">';
    memberRow.appendChild(host);
  } else {
    const banish = document.createElement('button');
    banish.setAttribute('class', 'room__member--banish');
    banish.innerText = '추방하기';

    const delegate = document.createElement('button');
    delegate.setAttribute('class', 'room__member--delegate');
    delegate.innerText = '권한위임';

    const banishDelegateBox = document.createElement('div');
    banishDelegateBox.setAttribute('class', 'room__member--box');

    banishDelegateBox.appendChild(banish);
    banishDelegateBox.appendChild(delegate);

    memberRow.appendChild(banishDelegateBox);

    memberRow.addEventListener('click', (event) => {
      const rect = memberRow.getBoundingClientRect();

      banishDelegateBox.style.display = 'flex';
      banishDelegateBox.style.transform = `translate(${
        event.clientX - (rect.right - 276)
      }px, ${event.clientY - rect.top}px)`;

      banish.addEventListener('click', () => {
        console.log(`${memberText} 추방`);
        members.removeChild(memberRow);
      });

      delegate.addEventListener('click', () => {
        console.log(`${memberText} 위임`);
        members.prepend(createMember(`${memberText}`, true));
        members.removeChild(memberRow);
      });
    });
  }

  return memberRow;
}

function addMember(name, isHost) {
  const member = createMember(name, isHost);

  members.appendChild(member);
}

function MemberInstance(profileImg, name, isHost) {
  this.profileImg = profileImg;
  this.name = name;
  this.isHost = isHost;

  addMember(name, isHost);
}

// temp
const mem1 = new MemberInstance(null, '이루나', true);
const mem2 = new MemberInstance(null, '김민지', false);
const mem3 = new MemberInstance(null, '김지석', false);
const mem4 = new MemberInstance(null, '김루나', false);
