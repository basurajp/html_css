document.addEventListener("DOMContentLoaded", function () {
    let start = document.querySelector("#start");
    let stop = document.querySelector("#stop");
    let h3 = document.querySelector("h3");
    let count;
    var clr;
  
    start.addEventListener("click", function () {
      count = 0;
      clr = setInterval(function () {
        h3.textContent = count;
        count++;
      }, 1000);
    });
  
    stop.addEventListener("click", function () {
      clearInterval(clr);
    });
  });
  