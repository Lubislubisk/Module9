let input = document.querySelector('input');
let button = document.querySelector ('button');
let pNew = document.querySelector ('#duplicateField');

input.addEventListener('keydown',function contentNew()
{
pNew.textContent = input.value;
})

button.addEventListener('click', function contentOut(event){
  if(input.value !=''){
  console.log(input.value);}
  pNew.textContent ='';
  input.value ='';
  event.preventDefault();
})


