let radius1 = document.getElementsByClassName('radius');
const green1 = document.querySelector('#green');
const yellow1 = document.querySelector('#yellow');
const red1 = document.querySelector('#red');


function activateRed() {
  this.style.background = 'red';
  yellow1.style.background = '';
  green1.style.background = '';
}

function activateYellow() {
  this.style.background = 'yellow';
  red1.style.background = '';
  green1.style.background = '';
}

function activateGreen() {
  this.style.background = 'green';
  yellow1.style.background = '';
  red1.style.background = '';
}


yellow1.addEventListener('click', activateYellow);
green1.addEventListener('click', activateGreen);
red1.addEventListener('click', activateRed)