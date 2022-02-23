const tempCode = 'QWERTY';
const code = document.querySelector('.room__code');

function createRoomCode(tempCode) {
  const roomTitle = document.createElement('div');
  roomTitle.setAttribute('class', 'room__code--title');
  roomTitle.innerText = '방 참가';

  const roomCode = document.createElement('div');
  roomCode.setAttribute('class', 'room__code--code');
  roomCode.innerText = tempCode;

  const roomCodeCopy = document.createElement('button');
  roomCodeCopy.setAttribute('class', 'room__code--copy');
  roomCodeCopy.innerHTML = '<img src="images/복사버튼.svg">';
  roomCodeCopy.addEventListener('click', () => {
    console.log(tempCode);
    alert('code copied');
  });

  code.appendChild(roomTitle);
  code.appendChild(roomCode);
  code.appendChild(roomCodeCopy);
}

createRoomCode(tempCode);
