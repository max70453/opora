import './contact.sass'

let submitBtn = $('.submit-js');
let form = submitBtn.closest('.form-js');
let secret = form.find('.contact__form-secret');

submitBtn.on('click', function(){
    secret.value = 'siteSecretKey';
    });
     
    //E-mail Ajax Send
	form.on('submit', function() { //Change 
		var th = $(this);
        let err = form.find('.error-msg');
        let popup = form.closest('.contact-popup');
        if(secret.value === 'siteSecretKey' && err.text() === ""){ 
            $.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize(),
            }).done(function() {
                if(popup){
                    $.magnificPopup.close();
                }
                th.trigger("reset");
                $('.success-msg').addClass('success-msg--show');
                setTimeout(function() {
                    $('.success-msg').removeClass('success-msg--show');          
                },3000);
            }).fail(function() {
                alert( "Не удалось отправить данные" );
                if(popup){
                    $.magnificPopup.close();
                }
              })
        }
		
		return false;
	});
