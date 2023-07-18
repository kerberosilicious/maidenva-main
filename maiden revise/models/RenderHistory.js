"use strict";

class History {
  aiResParent = document.querySelector(".response-parent");
  historyParent = document.querySelector(".history-content-container");
  linksParent = document.querySelector(".link-content-container");

  constructor(qNum, question, q, a, cont, historyDATA) {
    this.qNum = qNum;
    this.question = question;
    this.q = q;
    this.a = a;
    this.cont = cont;
    this.historyDATA = historyDATA;
  }

  getLocal() {
    const historyHTML = `
        <div class="history-content" >
            <div class="q-number-container">
            <p class="q-number">Q${Number(this.qNum)}</p>
            </div>
            <div class="question-container">
            <button class="question" data-n="${Number(
              this.qNum
            )}"><p data-jamal="${this.question.toUpperCase()};${this.a.replace(
      /"/g,
      ""
    )};${this.cont.replace(/"/g, "")}">${this.question.slice(0, 45)}${
      this.question.length > 45 ? "..." : " "
    }</button>
            </div>
        </div>
        `;

    this.historyParent.insertAdjacentHTML("beforeend", historyHTML);

    const btn = document.querySelectorAll(".question");

    btn.forEach((el) => {
      el.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const qu = document.querySelector(".q");
        const an = document.querySelector(".a");
        const close = document.querySelector(".close");
        const bod = document.querySelector("body");
        const cont = document.querySelector(".cont");
        const overlay = document.querySelector(".overlay");

        modal.classList.remove("hidden");
        qu.innerHTML = `${el.firstChild.dataset.jamal.split(";")[0]}`;
        an.innerHTML = `${el.firstChild.dataset.jamal.split(";")[1]}`;
        cont.href = `${el.firstChild.dataset.jamal.split(";")[2]}`;

        close.addEventListener("click", () => {
          modal.classList.add("hidden");
        });

        overlay.addEventListener("click", (e) => {
          modal.classList.add("hidden");
        });

        bod.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            modal.classList.add("hidden");
          }
        });
      });
    });
  }
}

export default History;
