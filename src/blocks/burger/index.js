import './burger.sass';

export default function burgerMenu(){
    const burger = $(".burger");
    const menu = $('.header-mobile__menu');
    burger.on('click',function(){
        burger.toggleClass("is-active");
        menu.toggleClass('open');
        menu.find('.burger__line').css('background-color', '#687882');
    } )
};
