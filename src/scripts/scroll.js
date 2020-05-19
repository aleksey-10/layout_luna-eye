'use strict';

const topBtn = document.querySelector('.arrow-up');

window.addEventListener('scroll', function() {
  window.pageYOffset < 500 ? topBtn.style.display = 'none'
    : topBtn.style.display = 'inline-block';
});

topBtn.onclick = function() {
  document.documentElement.scrollTop = 0;
};
