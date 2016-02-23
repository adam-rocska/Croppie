var EventTarget, DOMRect;

DOMTokenList = require('./DOMTokenList');
EventTarget = require('./EventTarget');
DOMRect = require('./DOMRect');

HTMLElement = function HTMLElement() {
   EventTarget.apply(this, arguments);
   this.style = {};
   this.classList = new DOMTokenList();
   this.appendChild = function () {
   };
   this.getBoundingClientRect = function () {
      return new DOMRect();
   };
};
HTMLElement.prototype = Object.create(EventTarget.prototype);

module.exports = HTMLElement;