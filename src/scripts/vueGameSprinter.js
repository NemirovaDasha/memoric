import sprinters from './parts/sprinters'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-sprinter',
    data: {
      signsList: [
        {
          src: "assets/img/games/sprinter/signs/!.svg",
          id: "!",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/0.svg",
          id: "0",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/1.svg",
          id: "1",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/2.svg",
          id: "2",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/3.svg",
          id: "3",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/4.svg",
          id: "4",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/5.svg",
          id: "5",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/6.svg",
          id: "6",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/7.svg",
          id: "7",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/8.svg",
          id: "8",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/9.svg",
          id: "9",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/checked.svg",
          id: "checked",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/next.svg",
          id: "next",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/pause.svg",
          id: "pause",
          success: false,
          error: false
        },
        {
          src: "assets/img/games/sprinter/signs/x.svg",
          id: "x",
          success: false,
          error: false
        }
      ],
      currentSignsList: []
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },
      getGameSigns() {
        const signs = JSON.parse(localStorage.getItem('signs'));
        const currentSignsList = [];
        let counter = 0;
        const length = this.signsList.length;

        while (counter !== 15) {
          let randomSign = this.signsList[this.getRandomInt(0, length)];
          randomSign.success = signs.some(element => element.id === randomSign.id);
          currentSignsList[counter] = randomSign;
          counter += 1;
        }

        signs.forEach(sign => {
          sign.success = true;
          currentSignsList[this.getRandomInt(0, length)] = sign;
          currentSignsList[this.getRandomInt(0, length)] = sign;
        });

        this.currentSignsList = currentSignsList;


        this.$nextTick(() => {
          sprinters();
        })
      },
    },
    mounted() {
      this.getGameSigns();
    }
  })
});