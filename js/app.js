// JS fragment import example
import * as functions from './modules/functions.js';
functions.isWebp();
functions.spollers();

// БАЗОВІ СКРИПТИ
import './modules/base.js';

AOS.init();

$(document).ready(function () {
  $('.products__sizes').select2();
});

if ($('.products__item-cart')) {
  $('.products__item-cart').click(function (e) {
    $(this).next('.products__dropdown').slideToggle();
    $(this).next('.products__dropdown').toggleClass('active');
  });
}

$(document).click(function (event) {
  var $target = $(event.target);
  if (
    !event.target.closest('.products__dropdown') &&
    !event.target.closest('.products__item-cart')
  ) {
    $('.products__dropdown.active').slideUp();
    $('.products__dropdown').removeClass('active');
  }
});

// ТАБИ
// import './modules/tabs.js';

//  СЛАЙДЕР
// import './modules/slider.js';

// import './modules/popup.js';
