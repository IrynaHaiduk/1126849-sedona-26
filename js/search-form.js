var button = document.querySelector(".search-button");
var form = document.querySelector(".modal-form");
var date = form.querySelector("[name=arrival-date]");
var search = form.querySelector("form");
var data2 = form.querySelector("[name=depature-date]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");

"use strict"; (function() { form.classList.add("modal-close");})();
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.add("modal-show");
  date.focus();
});

search.addEventListener("submit", function (evt) {
    if (!date.value || !date2.value || !adults.value || !children.value) {
      evt.preventDefault();
      form.classList.add("modal-error");

    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (form.classList.contains("modal-show")) {
        form.classList.remove("modal-show");

      }
    }
  });