var tab = document.querySelectorAll(".tab");
var h3 = document.querySelectorAll("h3");
var home_text = document.querySelector("#home_text");

home_text.style.display = "block";

function hide_all_data() {
  h3.forEach(function (elem) {
    elem.style.display = "none";
  });
}

tab.forEach(function (elem, index) {
  elem.addEventListener("click", function () {
    hide_all_data();
    h3[index].style.display = "block";
  });
});
