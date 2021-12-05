export default () => {
  const gamestart = document.querySelector('.js-game');
  const restTime = document.getElementById('js-rest-time');
  const isgame = document.querySelector('.js-game-in-process');
  const popup = document.querySelector('.popup');

  if (gamestart != null) {
    gamestart.addEventListener('click', () => {
      if (sessionStorage.getItem('start') == null) {
        let date = new Date();
        sessionStorage.setItem('start', date.getHours().toString());
      }
    });
    setTimeout(() => timer(), 1000)
  }

  function timer() {
    const dateNow = new Date();
    let difference = dateNow.getHours() - parseInt(sessionStorage.getItem('start'));
    if ((difference >= 1) && (isgame == null)) {
      popup.classList.remove('mod-hidden');
      popup.classList.add('mod-visible');
      document.body.classList.add('m-overflow');
      setTimeClock(0)
    }
  }

  function setTimeClock(n) {
    let min = 0;
    let sec = 0;
    if (n < 60) {
      min = 0;
      sec = n
    } else {
      min = Math.floor(n / 60);
      sec = n % 60
    }
    restTime.innerHTML = to10(min) + ":" + to10(sec);
    n++;
    if (n <= 18000) {
      setTimeout(() => setTimeClock(n), 1000);
    }
  }

  function to10(num) {
    if (num < 10) {
      return '0' + num.toString();
    } else {
      return num.toString();
    }
  }
}
