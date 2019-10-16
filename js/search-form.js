"use strict";

(function () {
	var button = document.querySelector(".search-button");
	var popup = document.querySelector(".form-wrap");
	var date = popup.querySelector("[name=arrival-date]");
	var search = popup.querySelector(".search-form");
	var date2 = popup.querySelector("[name=depature-date]");
	var amount1 = popup.querySelector("[name=adults]");
	var amount2 = popup.querySelector("[name=children]");

  popup.classList.add("modal-close");
  
	button.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		date.focus();
	});

  function removeModalErrorClass () {
    popup.classList.remove("modal-error");
  }
  
	search.addEventListener("submit", function (evt) {
		evt.preventDefault();
		if (!date.value || !date2.value || !amount1.value || !amount2.value) {
      popup.classList.add("modal-error");
      setTimeout(removeModalErrorClass, 500);
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
			}
		}
	});
})();