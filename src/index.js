import $ from 'jquery';
// Uncomment for use BOOTSTAP4
// window.Popper = require('popper.js').default;
// require('bootstrap');
// import 'bootstrap/scss/bootstrap.scss';
import 'animate.css';
import WOW from 'wow.js/dist/wow.js';
import '@fortawesome/fontawesome-free/js/all';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './fonts';
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';
import burgerMenu from './blocks/burger';
import toggleHeader from './layout/header';
import slider from './pages/home/examples/slider';
import popup from './pages/home/examples/popup';
import contactPopup from './blocks/contact-popup';

new WOW().init({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
});
$(() => {
  initLayout();
  initBlocks();
  initPages();
  burgerMenu();
  toggleHeader();
  slider;
  popup;
  contactPopup();
});

