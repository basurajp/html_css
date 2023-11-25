var clutter = "";
for (let i = 1; i <= 152; i++) {
  let rn = Math.floor(Math.random() * 10);
  clutter += `<div class="buble">${rn}</div>`;
}

document.querySelector(".pbtm").innerHTML = clutter;
