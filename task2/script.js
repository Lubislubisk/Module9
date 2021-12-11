const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#Alert');
const Prompt = document.querySelector('#Prompt');
//consoleLog.addEventListener('click', () => {
  //alert('Пример использования команды console.log');
//})


consoleLog.addEventListener('click', outputone) 
function outputone(e) {
  alert('Пример использования команды console.log');
}

Alert.addEventListener('click', outputtwo) 
function outputtwo(e) {
  alert('Пример использования команды Alert');
}

Prompt.addEventListener('click', outputthree) 
function outputthree(e) {
  alert('Пример использования команды Prompt');
}