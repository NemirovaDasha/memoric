document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-loss',
    data: {
      toysList: [
        {
          src: "assets/img/games/loss/toys/bear.svg",
          id: "bear",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/bear2.svg",
          id: "bear2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/bear3.svg",
          id: "bear3",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/books1.png",
          id: "books1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/books1-2.svg",
          id: "books1-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/books2.svg",
          id: "books2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/books2-2.svg",
          id: "books2-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/car1.svg",
          id: "car1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/car2.svg",
          id: "car2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/chick.svg",
          id: "chick",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/cube.svg",
          id: "cube",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/cubes1.svg",
          id: "cubes1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/cubes2.svg",
          id: "cubes2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/cubes2-2.svg",
          id: "cubes2-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/cubes3.svg",
          id: "cubes3",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/duck1.svg",
          id: "duck1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/duck2.svg",
          id: "duck2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/duck2-2.svg",
          id: "duck2-2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/duck3.svg",
          id: "duck3",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/loss/toys/rabbit.svg",
          id: "rabbit",
          success: false,
          error: false
        }
      ],
      currentToys: [],
      correctAnswer: {},
      end: false,
      gameCounter: 0
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },
      getToys() {
        if (this.gameCounter < 5) {
          let array = JSON.parse(JSON.stringify(this.toysList));
          let currentIndex = array.length, temporaryValue, randomIndex;

          while (0 !== currentIndex) {
            randomIndex = this.getRandomInt(0, currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
          this.currentToys = array;
          this.selectAnswer();
          this.gameCounter += 1;
        } else {
          this.end = true;
        }
      },
      selectAnswer() {
        const answerIndex = this.getRandomInt(0, this.toysList.length);
        this.correctAnswer = this.currentToys[answerIndex];
      },
      checkAnswer(toy) {
        if (toy.id === this.correctAnswer.id) {
          toy.success = true;
        } else {
          toy.error = true;
          this.correctAnswer.success = true;
        }
        setTimeout(this.getToys, 1000);
      }
    },
    beforeMount() {
      this.getToys()
    }
  })
});