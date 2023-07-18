"use strict";

class SpeakUtils {
  constructor() {}

  speak(sentence) {
    document.querySelector(".stop-generating").classList.remove("hidden");

    const text_speak = new SpeechSynthesisUtterance(sentence);
    let senLen = sentence.length;

    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.voice = window.speechSynthesis.getVoices()[5];
    setTimeout(function(){
      text_speak.voice = window.speechSynthesis.getVoices()[5];
    },50);

    window.speechSynthesis.speak(text_speak);

    const n = senLen * 0.65;
    console.log(n * 75);

    setTimeout(() => {
      document.querySelector(".stop-generating").classList.add("hidden");
    }, n * 95);
  }
  speakB(sentence) {
    document.querySelector(".stop-generating").classList.remove("hidden");

    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.voice = window.speechSynthesis.getVoices()[5];
    setTimeout(function(){
      text_speak.voice = window.speechSynthesis.getVoices()[5];
    },50);
    window.speechSynthesis.speak(text_speak);
  }
}

export default SpeakUtils;
