let aNew = document.querySelector ('#a1');

aNew.addEventListener('click',function transformation(event)
{ let content =prompt('Введите текст');
aNew.textContent=content;
event.preventDefault()  
})

