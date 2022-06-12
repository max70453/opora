import './phoneselect.sass'
import 'intl-tel-input/build/css/intlTelInput.css';
import "intl-tel-input/build/js/utils";

import intlTelInput from 'intl-tel-input';

document.querySelectorAll('.phone-select').forEach(item => {

 var input = intlTelInput(item, {
    onlyCountries: ["al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk",
    "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv",
    "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro",
    "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb"],
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "ru";
        callback(countryCode);
      });
    },
    customContainer: 'customContainer', 
    autoPlaceholder: "polite",
    formatOnDisplay: true,
    utilsScript: "build/js/utils.js",
    nationalMode: false,
    singleDialCode: true,
  
  }); 
  
  var errorMap = ["Неверный номер", "Неверный код страны", "Номер слишком короткий", "Номер слишком длинный", "Неверный номер"];
  var reset = function() {
  item.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
};

var parent = item.closest('.input-wrap-js');
var errorMsg = parent.querySelector('.error-msg'); 
 
// on blur: validate
  item.addEventListener('blur', function() {
    reset();
    if (item.value.trim()) {
      if (input.isValidNumber()) {
        reset();
        console.log('Valid');
      } else {
        item.classList.add("error");
        var errorCode = input.getValidationError(); 
        errorMsg.innerHTML = errorMap[errorCode] === undefined ? "Неверный номер" : errorMap[errorCode];
        errorMsg.classList.remove("hide");
      }
    }
  });
  
  // on keyup / change flag: reset
  item.addEventListener('change', reset);
  item.addEventListener('keyup', reset);

})

$('.iti__country-list').attr('data-simplebar', true);




