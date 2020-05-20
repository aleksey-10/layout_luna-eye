'use strict';

class InnerPrompts {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.promptClassName = 'parametr__description';
  }

  init() {
    this.wrapper.onclick = (e) => this._open(e);
  }

  _open(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }

    const description = e.target
      .parentElement.querySelector(`.${this.promptClassName}`);

    for (const item of this.wrapper.children) {
      if (item === e.target.parentElement) {
        continue;
      }

      this._close(item.querySelector(`.${this.promptClassName}`));
    }

    description.classList.toggle(`${this.promptClassName}--active`);

    this._setPosition(description);
  }

  _close(element) {
    element.classList.remove(`${this.promptClassName}--active`);
    element.style.height = 0;
  }

  _setPosition(element) {
    const elementCoordinates = element.getBoundingClientRect();
    const wrapperCoordinates = this.wrapper.getBoundingClientRect();

    if (!element.classList.contains((`${this.promptClassName}--active`))) {
      element.style.height = 0;

      return;
    }

    elementCoordinates.x < 0
      && element.classList.add(`${this.promptClassName}--mirror`);

    element.style.height = wrapperCoordinates.bottom
      - elementCoordinates.top - 75 + 'px';
  }
}

for (const item of document.querySelectorAll('.luna-tech')) {
  new InnerPrompts(item).init();
}
