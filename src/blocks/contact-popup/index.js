import './contact-popup.sass';

export default function contactPopup(){
  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
    closeBtnInside: false,

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		// callbacks: {
		// 	beforeOpen: function() {
		// 		if($(window).width() < 700) {
		// 			this.st.focus = false;
		// 		} else {
		// 			this.st.focus = '#name';
		// 		}
		// 	}
		// }
	});
}

