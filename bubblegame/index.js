var score = 0;
var timer = 60;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
var hrn = 0;
function getnewHit() {
  hrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hrn;
}

function makebuble() {
  var clutter = "";
  for (let i = 1; i <= 152; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="buble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
        document.querySelector('.pbtm').innerHTML =`<h1>Game Over</h1>`
      clearInterval(timerint);
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (hrn === clickedNum) {
    increaseScore();
    getnewHit();
    makebuble();
  }
});

makebuble();
runTimer();
getnewHit();
// increaseScore();
