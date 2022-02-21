const room = document.querySelector('.room');

function createRoom(title, role) {
  const roomRow = document.createElement('li');
  roomRow.setAttribute('class', 'room__row');

  const roomTitle = document.createElement('div');
  roomTitle.setAttribute('class', 'room__title');
  roomTitle.innerText = title;

  const roomRole = document.createElement('div');
  roomRole.setAttribute('class', 'room__role');
  roomRole.innerText = role;

  const roomEnter = document.createElement('button');
  roomEnter.setAttribute('class', 'room__enter');
  roomEnter.innerText = '입장하기';

  const roomExit = document.createElement('button');
  roomExit.setAttribute('class', 'room__exit');
  roomExit.innerText = '나가기';

  roomRow.appendChild(roomTitle);
  roomRow.appendChild(roomRole);
  roomRow.appendChild(roomEnter);
  roomRow.appendChild(roomExit);

  return roomRow;
}

// 생성자 함수로 객체 생성
function SetRoomInfo(roomTitle, roomRole) {
  this.roomTitle = roomTitle;
  this.roomRole = roomRole;
}

function temp() {
  const testRoom = new SetRoomInfo('test1', 'member');
  room.appendChild(createRoom(testRoom.roomTitle, testRoom.roomRole));
}

temp();
temp();
