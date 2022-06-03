import $ from 'jquery';
// Uncomment for use BOOTSTAP4
// window.Popper = require('popper.js').default;
// require('bootstrap');
// import 'bootstrap/scss/bootstrap.scss';

import './fonts';
import '@fortawesome/fontawesome-free/js/all'
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';
import burgerMenu from './blocks/burger';
import toggleHeader from './layout/header';
import slider from './pages/home/examples/slider';
import popup from './pages/home/examples/popup';

$(() => {
  initLayout();
  initBlocks();
  initPages();
  burgerMenu();
  toggleHeader();
  slider;
  popup;
  
});

