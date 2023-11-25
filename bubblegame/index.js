let btm = document.querySelector(".btm");
let hit = document.querySelector("#hit");
let btimer = document.querySelector("#btimer");
let bpanel = document.querySelector("#bpanel");
let domscore = document.querySelector("#domscore");

let hrn;
let inttimer = 60;
let clrTimeInterval;
let rn;
let clutter = "";
let uscore = 0;
let clicked;

function makeBuble() {
  for (i = 0; i < 102; i++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class="buble">${rn}</div>`;
    btm.innerHTML = clutter;
  }
}

function makeHit() {
  hrn = Math.floor(Math.random() * 10);
  hit.textContent = hrn;
}

function timer() {
  if (inttimer < 0) {
    clrTimeInterval = setInterval(function () {
      inttimer--;
      btimer.textContent = inttimer;
    }, 1000);
  } else {
    clearInterval(clrTimeInterval);
    
  }
}

function score() {
  uscore += 10;
  domscore.textContent = uscore;
}

bpanel.addEventListener("click", function (dts) {
  clicked = Number(dts.target.innerHTML);
  if (clicked === hrn) {
    score();
    makeBuble();
    makeHit();
  }
});

timer();
makeBuble();
makeHit();
