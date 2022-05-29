import $ from 'jquery';
// Uncomment for use BOOTSTAP4
// window.Popper = require('popper.js').default;
// require('bootstrap');
// import 'bootstrap/scss/bootstrap.scss';

import './fonts';
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';
import slider from './pages/home/examples/slider';
import popup from './pages/home/examples/popup';

$(() => {
  initLayout();
  initBlocks();
  initPages();
  slider;
  popup;
});
