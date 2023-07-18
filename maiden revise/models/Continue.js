'use strict';

class Continue {
  constructor(previousData) {
    this.previousData = previousData;
  }

  render() {
    const aiResHTML = `
    <div class="response">
       <p class="question-ai">
      ${this.questionJSON}
       </p>
       <p class="answer">
       ${this.answerJSON}
       </p>
       <a href="${this.continueReading}" target="_blank" class="continue"
       >continue reading...</a
       >
   </div>
    `;
    this.aiResParent.insertAdjacentHTML('beforeend', aiResHTML);
  }
}

export default Continue;
