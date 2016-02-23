var HTMLElement, Event;

HTMLElement = require('./HTMLElement');
Event = require('./Event');

document = {
   createElement: function () {
      return new HTMLElement();
   },
   createEvent: function () {
      return new Event();
   }
};

module.exports = document;