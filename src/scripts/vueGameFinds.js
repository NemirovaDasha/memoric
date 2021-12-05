document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-finds',
    data: {
      smileList: [
        {
          src: "assets/img/games/finds/em1-1.svg",
          id: "em1-1",
          idReverse: "em1-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em1-2.svg",
          id: "em1-2",
          idReverse: "em1-1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em2-1.svg",
          id: "em2-1",
          idReverse: "em2-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em2-2.svg",
          id: "em2-2",
          idReverse: "em2-1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em3-1.svg",
          id: "em3-1",
          idReverse: "em3-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em3-2.svg",
          id: "em3-2",
          idReverse: "em3-1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em4-1.svg",
          id: "em4-1",
          idReverse: "em4-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/finds/em4-2.svg",
          id: "em4-2",
          idReverse: "em4-1",
          success: false,
          error: false
        }
      ],
      currentSmile: {},
      correctAnswer: {},
      currentSmileList: [],
      players: [],
      queue: 0,
      gameCounter: 0
    },
    computed: {
      currentPlayerName() {
        return this.players.length ? this.players[this.queue].value : ''
      }
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },
      getSmile() {
        const array = JSON.parse(JSON.stringify(this.smileList));
        const randomIndex = this.getRandomInt(0, this.smileList.length);
        this.currentSmile = array[randomIndex];
        this.correctAnswer = array.find(element => element.id === this.currentSmile.idReverse)
        for (let i = 0; i < 63; i++) {
          const curSmile = JSON.parse(JSON.stringify(this.currentSmile));
          curSmile.id = i;
          this.currentSmileList[i] = curSmile;
        }
        this.currentSmileList[this.getRandomInt(0, 63)] = this.correctAnswer;
      },
      checkAnswer(smile) {
        if (smile.id === this.correctAnswer.id) {
          smile.success = true;
          this.addPoints();
        } else {
          smile.error = true;
          this.correctAnswer.success = true;
        }
        this.gameCounter -= 1;
        if (this.gameCounter === 0)
          setTimeout(this.endGame, 300);
        else{
          setTimeout(this.getSmile, 1000);
          setTimeout(this.nextPlayer, 1000);
        }
      },
      nextPlayer() {
        if (this.queue < this.players.length - 1) {
          this.queue += 1;
        } else {
          this.queue = 0;
        }
      },
      addPoints() {
        let player = this.players[this.queue];
        player.points += 1;
      },
      endGame() {
        localStorage.setItem('players', JSON.stringify(this.players));
        window.location = 'result.html'
      }
    },
    beforeMount() {
      this.getSmile();
      this.players = JSON.parse(localStorage.getItem('players'));
      this.gameCounter = this.players.length*2;
    }
  })
});