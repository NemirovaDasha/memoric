export default () => {
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const player3 = document.getElementById('player3');
  const signs = document.querySelector('.js-signs');
  const push = document.querySelector('.js-push');
  const win = document.querySelector('.js-winner');
  const btn = document.querySelectorAll('.js-fast');
  let fast = 1;
  let end = false;
  let winner;

  if (player3 != null) {
    setTimeout(() => startSprint(), 4500);
  }

  btn.forEach(function (el) {
    el.addEventListener('click', () => {
      let isCorrect = el.getAttribute('data-correct');
      if (isCorrect) {
        fast++;
        push.classList.add('m-correct');
        setTimeout(() => push.classList.remove('m-correct'), 600);
      } else {
        if (fast > 1) {
          fast--;
        }
        push.classList.add('m-wrong');
        setTimeout(() => push.classList.remove('m-wrong'), 600);
      }
    })
  });

  function startSprint() {
    move(900);
    setTimeout(() => run(0, player2, 2), 1500);
    setTimeout(() => run(0, player3, 3), 1500);
    setTimeout(() => run1(0), 1500);
  }

  function move(n) {
    signs.style.left = n + "px";
    n--;
    if (!end) {
      setTimeout(() => move(n), 10)
    }
  }

  function run(num, player, x) {
    player.style.transform = `translateX(${num}px)`;
    num = num + x;
    if (!end) {
      check(player);
      setTimeout(() => run(num, player, x), 100)
    }
  }

  function run1(num) {
    player1.style.transform = `translateX(${num}px)`;
    num = num + fast;
    if (!end) {
      check(player1);
      setTimeout(() => run1(num), 100)
    }
  }

  function check(player) {
    let number = player.style.transform;
    let n = number.split('(');
    n = n[1].split('px');
    n = n[0];
    if (n >= 920) {
      end = true;
      winner = player;
      if (winner === player1) {
        fWinner('winner1').classList.add('m-winner');
      }
      if (winner === player2) {
        fWinner('winner2').classList.add('m-winner');
      }
      if (winner === player3) {
        fWinner('winner3').classList.add('m-winner');
      }
      win.parentElement.classList.add('m-win');
    }
  }

  function fWinner(playerId) {
    return document.getElementById(playerId)
  }
}