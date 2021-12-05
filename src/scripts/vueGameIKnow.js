document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-i-know',
    data: {
      questionsList: [
        {
          theme: 'Загадки',
          questions: [
            {
              question: 'Росло 3 берёзы. На каждой берёзе по 7 веток. На каждой ветке — по 3 яблока. Сколько всего яблок?',
              points: 10,
              answer: 'Ни одного. Яблоки на берёзах не растут',
              success: false,
              fail: false
            },
            {
              question: 'Что делает сторож, когда у него на голове сидит воробей?',
              points: 50,
              answer: 'Спит',
              success: false,
              fail: false
            },
            {
              question: 'Один глаз, один рог, но не носорог?',
              points: 100,
              answer: 'Корова из-за угла выглядывает',
              success: false,
              fail: false
            }
          ]
        },
        {
          theme: 'Ребусы',
          questions: [
            {
              question: 'ПО2Л Какое слово здесь спряталось?',
              points: 10,
              answer: 'Подвал',
              success: false,
              fail: false
            },
            {
              question: 'и 100 \'3 я Какое слово здесь спряталось?',
              points: 50,
              answer: 'История',
              success: false,
              fail: false
            },
            {
              question: '\'8 м=н Какое слово здесь спряталось?',
              points: 100,
              answer: 'Осень',
              success: false,
              fail: false
            }
          ]
        },
        {
          theme: 'Смекалочка',
          questions: [
            {
              question: 'Васиного отца зовут Иван Николаевич, а дедушку – Семен Петрович. Какое отчество у Васиной мамы?',
              points: 10,
              answer: 'Семеновна',
              success: false,
              fail: false
            },
            {
              question: 'Два мальчика играли на гитарах, а один на балалайке. На чем играл Юра, если Миша с Петей и Петя с Юрой играли на разных инструментах?',
              points: 50,
              answer: 'Юра играет на гитаре',
              success: false,
              fail: false
            },
            {
              question: 'Нет сомнения, что двести сорок + двести сорок = четыреста восемьдесят Но верно и то, что двести сорок + двести сорок = четыреста сорок. Как же так?',
              points: 100,
              answer: 'Во втором случае речь идет о птицах - сороках',
              success: false,
              fail: false
            }
          ]
        },
      ],
      currentThemes: [],
      currentQuestion: {},
      isGame: true,
      show: false,
      propVisibility: 'visible',
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
      getThemes() {
        let array = JSON.parse(JSON.stringify(this.questionsList));
        const currentThemes = [];
        currentThemes[0] = array[this.getRandomInt(0, array.length)];
        currentThemes[1] = array[this.getRandomInt(0, array.length)];

        while (currentThemes[1] === currentThemes[0]) {
          currentThemes[1] = array[this.getRandomInt(0, array.length)]
        }
        this.currentThemes = currentThemes;
      },
      setQuestion(question, theme) {
        this.currentQuestion = question;
        this.currentQuestion.theme = theme;
        this.isGame = false;
        this.propVisibility = 'visible';
        this.show = false;
      },
      successAnswer() {
        let curQuestions = this.currentThemes.find(element => element.theme === this.currentQuestion.theme);
        curQuestions = curQuestions.questions;
        const curQuestion = curQuestions.find(element => element.points === this.currentQuestion.points);
        curQuestion.success = true;
        this.addPoints();
        this.nextPlayer();
        this.gameCounter += 1;
        this.isGame = true;
        if (this.gameCounter === 6)
          setTimeout(this.endGame, 300)
      },
      failAnswer() {
        let curQuestions = this.currentThemes.find(element => element.theme === this.currentQuestion.theme);
        curQuestions = curQuestions.questions;
        const curQuestion = curQuestions.find(element => element.points === this.currentQuestion.points);
        curQuestion.fail = true;
        this.nextPlayer();
        this.gameCounter += 1;
        this.isGame = true;
        if (this.gameCounter === 6)
          setTimeout(this.endGame, 300)
      },
      showAnswer() {
        this.propVisibility = 'hidden';
        this.show = true;
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
    mounted() {
      this.getThemes();
      this.players = JSON.parse(localStorage.getItem('players'));
    }
  })
});