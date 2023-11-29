 console.log("hell world ");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let box = document.querySelector(".box");

function randomColor() {
  let hex = "0123456789abcdef";
  let color = "#";

  for (i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color += hex[randomNum];
  }
  return color;
}

let startchage_color;
start.addEventListener("click", function () {
  startchage_color = setInterval(changecolor, 1000);

  function changecolor() {
    box.style.backgroundColor = randomColor();
  }
  console.log("start Clicked ");
});

stop.addEventListener("click", function () {
  clearInterval(startchage_color);
  box.style.backgroundColor = "red";
  console.log("stoppped Clicked ");
});
