// var btn = document.querySelector("button");
// var h = document.querySelector("h1");

// btn.addEventListener("click", function () {
//   h.textContent = "Hello World!";
// });

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    var img1scr = img1.src
    var img2scr = img2.src

    img1.src = img2scr
    img2.src = img1scr
    console.log('basuraj');
})
