const editPictureBtn = document.querySelector('.button__edit-picture');
const editProfileBtn = document.querySelector('.form__edit-profile--submit');

function GetMemberInfo(name, email, nickname) {
  this.name = name;
  this.email = email;
  this.nickname = nickname;
}

editPictureBtn.addEventListener('click', () => {
  console.log('hello1');
});

editProfileBtn.addEventListener('click', () => {
  console.log('hello2');
});
