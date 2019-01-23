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
    setInterval(this.update, 1800)
  }
})
