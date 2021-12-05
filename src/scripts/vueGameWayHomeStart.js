document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#vue-game-way-home-start',
    data: {
      waysList: [
        {
          waySrc: [
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
            "assets/img/games/wayHome/arrows/right.svg",
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/top.svg",
          ],
          houseNumber: 3
        },
        {
          waySrc: [
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
            "assets/img/games/wayHome/arrows/top.svg",
          ],
          houseNumber: 3
        },
        {
          waySrc: [
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/left.svg",
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
          ],
          houseNumber: 2
        },
        {
          waySrc: [
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/left.svg",
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
          ],
          houseNumber: 2
        },
        {
          waySrc: [
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/right.svg",
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/left.svg",
            "assets/img/games/wayHome/arrows/bottom.svg",
            "assets/img/games/wayHome/arrows/left.svg",
          ],
          houseNumber: 1
        },
        {
          waySrc: [
            "assets/img/games/wayHome/arrows/top.svg",
            "assets/img/games/wayHome/arrows/left.svg",
            "assets/img/games/wayHome/arrows/left.svg",
          ],
          houseNumber: 1
        },
      ],
      currentWay: {}
    },
    methods: {
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },
      getWay() {
        let array = JSON.parse(JSON.stringify(this.waysList));
        const length = array.length;
        const randomIndex = this.getRandomInt(0, length);
        this.currentWay = array[randomIndex];

        localStorage.setItem('houseNumber', this.currentWay.houseNumber);
      }
    },
    beforeMount() {
      this.getWay()
    }

  })
})
;