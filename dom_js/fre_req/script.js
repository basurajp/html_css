let btn = document.querySelector("#btn");
let text = document.querySelector("h2");
let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    btn.innerHTML = "remove";
    text.innerHTML = "Friends";
    text.style.color = "green";
    flag = 1;
  } else {
    btn.innerHTML = "Add friend ";
    text.innerHTML = "Stranger";
    text.style.color = "red";
    flag = 0;
  }
});
