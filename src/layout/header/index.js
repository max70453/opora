import './header.sass';

export default function toggleHeader(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= 330) {
            $('.header').addClass('header__fixed');
        }
        else if($(window).scrollTop() <= 50) {
            $('.header').removeClass('header__fixed');
        }
}); 
}
