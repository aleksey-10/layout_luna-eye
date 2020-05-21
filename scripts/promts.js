'use strict';

class InnerPrompts {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.promptClassName = 'parametr__description';
  }

  init() {
    this.wrapper.onclick = (e) => e.target.tagName === 'BUTTON'
      && this.open(e.target.parentElement
        .querySelector(`.${this.promptClassName}`));

    return this;
  }

  open(element) {
    for (const item of this.wrapper.children) {
      if (item === element.parentElement) {
        continue;
      }

      this.close(item.querySelector(`.${this.promptClassName}`));
    }

    !element.classList.contains(`${this.promptClassName}--active`)
      ? this._setUp(element)
      : this.close(element);
  }

  close(element) {
    element.parentElement.querySelector('button').style.backgroundColor = '';
    element.classList.remove(`${this.promptClassName}--active`);
    element.style.height = 0;
  }

  _setUp(element) {
    element.classList.add(`${this.promptClassName}--active`);

    element.parentElement
      .querySelector('button').style.backgroundColor = '#000';

    this._setPosition(element);
  }

  _setPosition(element) {
    const elementCoordinates = element.getBoundingClientRect();
    const wrapperCoordinates = this.wrapper.getBoundingClientRect();

    elementCoordinates.x < 0
      && element.classList.add(`${this.promptClassName}--mirror`);

    element.style.height = wrapperCoordinates.bottom
      - elementCoordinates.top - 75 + 'px';
  }
}

for (const item of document.querySelectorAll('.luna-tech')) {
  new InnerPrompts(item)
    .init()
    .open(item.querySelector('.parametr__description'));
}
