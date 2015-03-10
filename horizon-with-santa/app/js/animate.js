let domReady = require('domready');

domReady(() => {
  let present = document.querySelector('x-present');
  present.animate([
    {transform: 'translate(0px, 0)'},
    {transform: 'translate(510px, 0)'}
  ], {
    direction: 'alternate',
    duration: 1000,
    easing: 'ease-in-out',
    iterations: Infinity
  })
});
