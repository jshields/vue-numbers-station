const synth = window.speechSynthesis;

const getRussianVoice = () => {
  //filter for lang: 'ru-RU'
  // TODO: wait for onvoiceschanged in Chrome and only setup the voice at app start
  let voices = synth.getVoices();
  let ru_voices = voices.filter(voice => voice.lang == 'ru-RU');
  if (ru_voices.length >= 1) {
    return ru_voices[0];
  }

  // fallback to first available
  return voices[0];
};

const speak = (text) => {
  let utter = new SpeechSynthesisUtterance(text);
  utter.pitch = 0.25;
  utter.rate = 0.8;

  utter.voice = getRussianVoice();

  speechSynthesis.speak(utter);
};

const randomNumber = () => Math.floor(Math.random() * Math.floor(100));


new Vue({
  el: '#app',
  data: {
    number: 0
  },
  methods: {
    update: () => {
      // set number in range 0 to 99
      this.number = randomNumber();

      // FIXME: make speak feature part of Vue app
      speak(this.number)
    }
  },
  created () {
    // Setup update loop.
    setInterval(this.update, 1800);
  }
})
