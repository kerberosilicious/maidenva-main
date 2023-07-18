'use strict';
import SpeakUtils from './SpeakUtils.js';

class LoadEvent {
  constructor(greetings) {
    this.greetings = greetings;
    this.speakUtil = new SpeakUtils();
  }

  load() {
    window.addEventListener('load', () => {

      const mema = '';
      const activatingM = 'Activating Maiden...';
      const goingOL = 'Going online...';

      var day = new Date();
      var hr = day.getHours();

      this.speakUtil.speak(mema);
      this.speakUtil.speak(activatingM);
      this.speakUtil.speak(goingOL);

      if (hr >= 0 && hr < 12) {
        this.greetings = 'Good Morning';
        this.speakUtil.speak(this.greetings);
      } else if (hr == 12) {
        this.greetings = 'Good Noon';
        this.speakUtil.speak(this.greetings);
      } else if (hr > 12 && hr <= 17) {
        this.greetings = 'Good Afternoon';
        this.speakUtil.speak(this.greetings);
      } else {
        this.greetings = 'Good Evening';
        this.speakUtil.speak(this.greetings);
      }
      const taskQuest = 'How may I assist you today?';
      this.speakUtil.speak(taskQuest);
      


      const aiResParent = document.querySelector(
        '.response-parent'
      );

      const aiResHTML = `
        <div class="response greet">
           <p class="question-ai">
           ${this.greetings}!
           </p>
       </div>
        `;
      aiResParent.insertAdjacentHTML('beforeend', aiResHTML);
    });
  }
}

export default LoadEvent;