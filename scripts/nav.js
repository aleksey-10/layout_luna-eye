'use strict';

const headerTop = document.querySelector('.header__top');
const navMob = document.querySelector('.nav-mobile');

headerTop.querySelector('.header__control').onclick = e =>
  e.target.classList.contains('btn-icon') && toggle();

navMob.onclick = e => e.target.classList.contains('nav-mobile__link')
  && toggle();

function toggle() {
  navMob.classList.toggle('nav-mobile--active');

  for (const btn of headerTop.querySelectorAll('.btn-icon')) {
    btn.classList.toggle('btn-icon--active');
  }
};
