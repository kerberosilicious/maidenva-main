'use strict';

const mediaQuery = window.matchMedia('(max-width: 700px)');

const btnHistory = document.querySelector('.history-btn');
const btnLink = document.querySelector('.link-btn');
const btnReturn = document.querySelector('.btn-return');


const historyContent = document.querySelector(
  '.history-content-container'
);
const aiContainer = document.querySelector('.ai-response-container');
const linkContent = document.querySelector('.link-content-container');

const handleViewportChange = (event) => {
  btnReturn.addEventListener('click', (e) => {
    aiContainer.classList.remove('hidden');
    aiContainer.style.width = '100%';
    linkContent.style.width = '0%';
    linkContent.style.display = 'none';
    historyContent.style.width = '0%';
    historyContent.style.display = 'none';
  });

  btnHistory.addEventListener('click', (e) => {
    if (event.matches) {
      aiContainer.classList.add('hidden');
      linkContent.style.width = '0%';
      linkContent.style.display = 'none';
      historyContent.setAttribute('style', 'width: 100% !important');
      historyContent.style.display = 'block';
      document.querySelectorAll('.q-number').forEach((el) => {
        el.style.fontSize = '16px';
      });
    }
  });

  btnLink.addEventListener('click', (e) => {
    if (event.matches) {
      linkContent.classList.remove('hidden');
      aiContainer.classList.add('hidden');
      historyContent.style.width = '0%';
      historyContent.style.display = 'none';
      linkContent.setAttribute('style', 'width: 100% !important');
      linkContent.style.display = 'block';
    }
  });

  if (event.matches) {
    aiContainer.style.width = '100%';
    linkContent.style.width = '0%';
    linkContent.style.display = 'none';
    historyContent.style.width = '0%';
    historyContent.style.display = 'none';
    btnReturn.style.display = 'flex';
  } else {
    aiContainer.classList.remove('hidden');
    btnReturn.style.display = 'none';
    linkContent.style.width = '27%';
    linkContent.style.display = 'block';
    aiContainer.style.width = '46%';
    historyContent.style.width = '27%';
    historyContent.style.display = 'block';
  }
};

mediaQuery.addListener(handleViewportChange);
handleViewportChange(mediaQuery);
