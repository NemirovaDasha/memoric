document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-players',
    data: {
      formPlayers: [
        {
          label: 'Игрок 1',
          id: 'player1',
          value: '',
          points: 0
        },
        {
          label: 'Игрок 2',
          id: 'player2',
          value: '',
          points: 0
        }
      ],
      numberOfPlayers: 2,
      gameURL: '',
      error: 'Введите не менее двух игроков',
      hasError: false
    },
    methods: {
      addPlayer() {
        this.numberOfPlayers += 1;
        const label = "Игрок " + this.numberOfPlayers;
        const id = "player" + this.numberOfPlayers;
        this.formPlayers.push({
          label: label,
          id: id,
          value: '',
          points: 0
        });
      },
      startGame() {
        let playersCounter = 0;
        this.formPlayers.forEach(el => {
          if (el.value === '')
            playersCounter += 1;
        });
        if (playersCounter > 0) {
          this.hasError = true
        } else {
          localStorage.setItem('players', JSON.stringify(this.formPlayers));
          window.location = this.gameURL;
        }
      }
    },
    beforeMount() {
      this.gameURL = localStorage.getItem('gameURL');
    }
  })
});