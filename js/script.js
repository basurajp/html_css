// var btn = document.querySelector("button");
// var h = document.querySelector("h1");

// btn.addEventListener("click", function () {
//   h.textContent = "Hello World!";
// });

// var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");

// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     var img1scr = img1.src
//     var img2scr = img2.src

//     img1.src = img2scr
//     img2.src = img1scr
//     console.log('basuraj');
// })

// var inputs = document.querySelectorAll('input[type="text"]');
// var btn = document.querySelector("#btn");
// var h4 = document.querySelector("h4");

// btn.addEventListener("click", function (ele) {
//     ele.preventDefault();
//     for(var i = 0; i <inputs.length; i++){
//        if(inputs[i].value.trim() === ""){
//         h4.textContent = "Please fill all the fields";
//         h4.style.color = "red";
//         break
//     }
//     else{
//         h4.textContent = "Form Submitted";
//         h4.style.color = "green";
//     }
//     }

//

let inp = document.querySelector("input");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let ul = document.querySelector("ul");
let li = document.createElement("li");

add.addEventListener("click", function () {
  if (inp.value.trim() == "") {
    alert("pls Enter the vaue ");
  } else {
    li =document.createElement("li")
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
  }
});

remove.addEventListener("click",function(){
    ul.removeChild(li)
})