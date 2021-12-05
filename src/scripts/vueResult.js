document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-result',
    data: {
      players: []
    },
    beforeMount() {
      let players = JSON.parse(localStorage.getItem('players'));
      players.sort((a, b) => a.points < b.points ? 1 : -1);
      this.players = players;
    }
  })
});