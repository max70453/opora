import './header.sass';

export default function toggleHeader(){
    $(window).on('scroll', function(){
        if ($(window).width() >= 840 && $(window).scrollTop() >= 330){
                $('.header__desctop').addClass('header__fixed');
          }   
        else if($(window).scrollTop() <= 50 || $(window).width() < 840) {
            $('.header__desctop').removeClass('header__fixed');
        }
        if (($(window).width() >= 320 && $(window).width() < 840) && $(window).scrollTop() >= 150){
            $('.header-mobile').addClass('header__fixed');
           }  
        else if($(window).scrollTop() <= 30 || $(window).width() >= 840) {
            $('.header-mobile').removeClass('header__fixed');
        }
       
        
        
}); 
}
