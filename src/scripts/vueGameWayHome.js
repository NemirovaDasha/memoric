document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-way-home',
    data: {
      currentHouse: 0,
      gameEnd: {
        text: "",
        success: false,
        fail: false,
        end: false
      }
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },
      getGameWay() {
        this.currentHouse = Number(localStorage.getItem('houseNumber'));
      },
      checkAnswer(houseNumber) {
        if (houseNumber === this.currentHouse) {
          this.gameEnd.text = 'Верный домик!';
          this.gameEnd.success = true;
        } else {
          this.gameEnd.text = 'Неверный домик!';
          this.gameEnd.fail = true;
        }
        this.gameEnd.end = true;
      }
    },
    mounted() {
      this.getGameWay();
    }
  })
});