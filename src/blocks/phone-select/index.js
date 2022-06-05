import './phoneselect.sass'
import 'intl-tel-input/build/css/intlTelInput.css';
import "intl-tel-input/build/js/utils";

import intlTelInput from 'intl-tel-input';

const input = document.querySelector(".phone-select__footer");
var iti = intlTelInput(input, {
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

iti.promise.then(function() {
  console.log("Initialised!"); 
});

var error = iti.getValidationError();
if (error === intlTelInputUtils.validationError.TOO_SHORT) {
   console.log('the number is too short');
}

var cont = $('.customContainer');
cont.find('.iti__country-list').attr('data-simplebar', true);

var errorMsg = document.querySelector("#error-msg"),
    validMsg = document.querySelector("#valid-msg");

var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

var reset = function() {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

// on blur: validate
input.addEventListener('blur', function() {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);



