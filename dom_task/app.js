let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

let li;

add.addEventListener("click", function () {
  if (inp.value == "") {
  } else {
    li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
  }
});

remove.addEventListener("click", function () {
  if (ul.childElementCount > 0) {
    ul.removeChild(ul.lastElementChild);
  }
});
