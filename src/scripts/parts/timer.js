export default () => {
  const timer = document.getElementById('js-timer');
  const timerParent = document.querySelector('.timer');

  if (timer != null) {
    counter(3);
  }

  function counter(n) {
    timer.innerHTML = n.toString();
    n--;
    if (n >= 0) {
      setTimeout(() => counter(n), 1000);
    } else {
      timerParent.classList.add('m-hide')
    }
  }
}