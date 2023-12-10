let textArea = document.querySelector('textarea')
let span = document.querySelector('span')



textArea.addEventListener('input',function(){
  let length = textArea.value.length 
  span.textContent = length
})