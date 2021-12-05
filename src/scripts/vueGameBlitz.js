document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-blitz',
    data: {
      questionsList: [
        {
          question: 'У какой рыбы оба глаза находятся на одной стороне туловища?',
          answers: [
            {
              text: 'Форель',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Камбала',
              isCorrect: true,
              success: false,
              error: false
            },
            {
              text: 'Акула',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Окунь',
              isCorrect: false,
              success: false,
              error: false
            }
          ],
        },
        {
          question: 'Что использовали японцы вместо денег до появления монет?',
          answers: [
            {
              text: 'Рис и ткани',
              isCorrect: true,
              success: false,
              error: false
            },
            {
              text: 'Ракушки',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Жемчужины',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Картофель',
              isCorrect: false,
              success: false,
              error: false
            }
          ],
        },
        {
          question: 'Где находится яд у кобры?',
          answers: [
            {
              text: 'В капюшоне',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'На хвосте',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'В зубе',
              isCorrect: true,
              success: false,
              error: false
            },
            {
              text: 'На кончике языка',
              isCorrect: false,
              success: false,
              error: false
            }
          ],
        },
        {
          question: 'Подвижный холм песка в пустыне называется...',
          answers: [
            {
              text: 'Гора',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Скала',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Утес',
              isCorrect: false,
              success: false,
              error: false
            },
            {
              text: 'Дюна',
              isCorrect: true,
              success: false,
              error: false
            }
          ]
        },
      ],
      currentQuestion: {},
      correctAnswer: {},
      timer: 10,
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
      getQuestion() {
        this.timer = 10;
        let randomIndex = this.getRandomInt(0, this.questionsList.length);
        let randomQuestion = JSON.parse(JSON.stringify(this.questionsList[randomIndex]));
        while (randomQuestion.question === this.currentQuestion.question) {
          randomIndex = this.getRandomInt(0, this.questionsList.length);
          randomQuestion = this.questionsList[randomIndex];
        }
        this.currentQuestion = JSON.parse(JSON.stringify(randomQuestion));
        this.correctAnswer = this.currentQuestion.answers.find(element => element.isCorrect)
      },
      checkAnswer(answer) {
        if (answer.isCorrect) {
          answer.success = true;
          this.addPoints();
        } else {
          answer.error = true;
          this.correctAnswer.success = true;
        }
        this.gameCounter -= 1;
        if (this.gameCounter === 0)
          setTimeout(this.endGame, 300);
        else {
          setTimeout(this.getQuestion, 1000);
          setTimeout(this.nextPlayer, 1000);
        }
      },
      setTimer() {
        if (this.timer > 0) {
          this.timer -= 1;
          setTimeout(this.setTimer, 1000);
        } else {
          this.gameCounter -= 1;
          if (this.gameCounter === 0)
            setTimeout(this.endGame, 300);
          else{
            this.getQuestion();
            this.nextPlayer();
            setTimeout(this.setTimer, 1000);
          }
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
      this.getQuestion();
      setTimeout(this.setTimer, 4000);
      this.players = JSON.parse(localStorage.getItem('players'));
      this.gameCounter = this.players.length * 2;
    }
  })
});