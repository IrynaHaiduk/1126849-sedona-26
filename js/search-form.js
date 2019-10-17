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
	console.log('нажала на кнопку button и вывела ее значение');
	console.log(button);
	evt.preventDefault();
  
	console.log('проверяю что возаращает условие popup.classList.contains("modal-show")', popup.classList.contains("modal-show"));
  
	if (popup.classList.contains("modal-show")) {
	  console.log('у popup есть класс modal-show, а значит класс удаляем');
	  popup.classList.remove("modal-show");
	} else {
	  console.log('у popup НЕТ класса modal-show, а значит класс выставляем');
	  popup.classList.add("modal-show"); 
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
	
	search.addEventListener("submit", function (evt) {
		evt.preventDefault();
		if (!date.value || !date2.value || !amount1.value || !amount2.value) {
			popup.classList.remove("modal-error");
			
			popup.classList.add("modal-error");
		} else { 
		 search.submit();
		}
	   });
	

})();