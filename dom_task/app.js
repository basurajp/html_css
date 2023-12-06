let h1 = document.querySelector("h1");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let count = 0;
let int;

start.addEventListener("click", function () {
  int = setInterval(function () {
    h1.textContent = count;
    count++;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(int);
  
});
