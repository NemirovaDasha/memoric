document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-sprinter-start',
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
      currentSigns: [],
      start: true
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },
      getSigns() {
        let array = JSON.parse(JSON.stringify(this.signsList));
        let counter = 0;
        const length = array.length;
        while (counter !== 4) {
          const randomIndex = this.getRandomInt(0, length);
          const randomSign = this.signsList[randomIndex];
          if (!this.currentSigns.includes(randomSign)){
            this.currentSigns[counter] = randomSign;
            counter += 1;
          }
        }
        localStorage.setItem('signs', JSON.stringify(this.currentSigns));
      }
    },
    beforeMount() {
      this.getSigns()
    }
  });
});