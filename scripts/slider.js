'use strict';

class Slider {
  constructor(slider) {
    this.slider = slider;
    this.gallery = slider.querySelector('.slider__gallery');
    this.current = slider.querySelector('.slider__current');
  }

  init() {
    this.amount = this.gallery.children.length;
    this.slider.querySelector('.slider__amount').innerHTML = `0${this.amount}`;
    this.counter = 0;

    this.slider.querySelector('.slider__arrows').onclick = e =>
      !e.target.classList.contains('slider__arrow') ? undefined : this._swap(e);
  }

  _swap(e) {
    if (e.target.classList.contains('slider__arrow--right')) {
      this.counter++ > this.amount - 2 && (this.counter = this.amount - 1);
    } else {
      this.counter-- <= 0 && (this.counter = 0);
    }

    this.gallery.style.transform
      = `translate(-${this.counter * 100}%)`;

    this.current.innerHTML = `0${this.counter + 1}&nbsp;`;
  }
}

new Slider(document.querySelector('.benefits__slider')).init();
new Slider(document.querySelector('.features__slider')).init();
new Slider(document.querySelector('.technology__slider')).init();
