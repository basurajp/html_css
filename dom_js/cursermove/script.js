// console.log('Hello World ');
let main= document.querySelector('.main')
let csr = document.querySelector('.cursor')

main.addEventListener('mousemove', function(dets){
    console.log(dets);
    csr.style.left = dets.clientX + 'px';
    csr.style.top = dets.clientY + 'px';
});
