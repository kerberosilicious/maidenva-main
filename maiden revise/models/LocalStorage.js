'use strict';

class LocalStorage {
  

  constructor(qNum, question, q, a, cont) {
    this.qNum = qNum;
    this.question = question;
    this.q = q;
    this.a = a;
    this.cont = cont;
  }

  setLocal() {
    localStorage.setItem(
      `history${this.qNum}`,
      JSON.stringify({
        history: {
          qNum: `${this.qNum}`,
          question: `${this.question}`,
          q: `${this.q}`,
          a: `${this.a}`,
          cont: `${this.cont}`,
        },
      })
    );
  }

}

export default LocalStorage;
