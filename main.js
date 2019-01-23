new Vue({
  el: '#app',
  data: {
    number: 0
  },
  methods: {
    update: function () {
      // set number in range 0 to 99
      this.number = Math.floor(Math.random() * Math.floor(100));
    }
  },
  created () {
    // or 2400 for 25 "tones" per minute
    // IDEA may want to add actual audio in the future
    setInterval(this.update, 1800);
  }
})
