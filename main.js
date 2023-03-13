new Vue({
  el: '#app',
  data: {
    number: 0
  },
  methods: {
    // Helpers
    getRussianVoice: function() {
      let synth = window.speechSynthesis;
      //filter for lang: 'ru-RU'
      // TODO: wait for onvoiceschanged in Chrome and only setup the voice at app start
      // FIXME: voice only works once user has pressed a key
      let voices = synth.getVoices();
      let ru_voices = voices.filter(voice => voice.lang == 'ru-RU');
      if (ru_voices.length >= 1) {
        return ru_voices[0];
      }

      // fallback to first available
      return voices[0];
    },
    speak: function(text) {
      let utter = new SpeechSynthesisUtterance(text);
      utter.pitch = 0.25;
      utter.rate = 0.8;
      utter.volume = 1;
      utter.voice = this.getRussianVoice();

      speechSynthesis.speak(utter);
    },
    randomNumber: function() {
      return Math.floor(Math.random() * Math.floor(100))
    },
    update: function() {
      // set number in range 0 to 99
      this.number = this.randomNumber();

      // may need to make a copy to avoid infinite loop?
      this.speak(this.number);
    }
  },
  created: function() {
    // Setup update loop.
    setInterval(this.update, 1800);
  }
})
