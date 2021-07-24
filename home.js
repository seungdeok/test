const userIcon = document.querySelector('.profile');

userIcon.addEventListener('click', () => {
  if(window.confirm('로그인하시겠습니까?')) {
    alert('로그인되었습니다.');
  } else {
    alert('재밌게 시청하세요^^');
  }
});

const button = document.querySelector('.button');
const activeButton = document.querySelector('.active-button');

button.addEventListener('click', ()  => {
  button.style.display = 'none';
  activeButton.style.display = 'flex';
  alert('구독되었습니다');
});

activeButton.addEventListener('click', ()  => {
  if(window.confirm('구독 취소하시겠습니까?')) {
    button.style.display = 'flex';
    activeButton.style.display = 'none';
  alert('구독취소되었습니다');
  }
});