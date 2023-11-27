let storiyan = document.querySelector(".storiyan");
let full_screen = document.querySelector(".fullscreen");

let arr = [
  {
    dp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww",
  },
];

var clutter = "";

arr.forEach(function (elem, index) {
  clutter += ` <div class="story">
<img id='${index}' src="${elem.dp}">
</div> `;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  //  arr[dets.target.id].story
  full_screen.style.display = "block";
  full_screen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
  setTimeout(function () {
    full_screen.style.display = "none";
  }, 3000);
});
