let istatus = document.querySelector("h3");
let add = document.querySelector("#add");
let flag = 0;

add.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    flag = 1;
    console.log("if dta ");
    add.innerHTML = "Remove";
  } else {
    istatus.innerHTML = "Stanger";
    istatus.style.color = "red";
    flag = 0;
    add.innerHTML = "Add friend";
  }
});

// remove.addEventListener("click", function () {
//   istatus.innerHTML = "Stanger";
//   istatus.style.color = "red";
// });
