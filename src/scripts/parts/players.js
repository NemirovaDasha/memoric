export default () => {
  const teamBtn = document.querySelector('.js-team-game');

  if (teamBtn) {
    teamBtn.addEventListener('click', (e) => {
      let target = e.target; // где был клик?
      if (target.tagName === 'BUTTON') {
        const game = target.id;
        localStorage.setItem('gameURL', game);
        location = 'players.html';
      }
    })

  }
}
