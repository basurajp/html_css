let istatus = document.querySelector("h3");
let add = document.querySelector("#add");

let remove = document.querySelector("#remove");

add.addEventListener("click", function () {
  istatus.innerHTML = "Friends";
  istatus.style.color = "green";
});

remove.addEventListener("click", function () {
  istatus.innerHTML = "Stanger";
  istatus.style.color = "red";
});
