const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');


function changeToRed() {
  document.body.style.backgroundColor = 'red';
}

function changeToGreen() {
  document.body.style.backgroundColor = 'green';
}

function changeToBlue() {
  document.body.style.backgroundColor = 'blue';
}

function revertToNormal() {
  document.body.style.backgroundColor = '';
}

redButton.addEventListener('mouseover', changeToRed);
greenButton.addEventListener('mouseover', changeToGreen);
blueButton.addEventListener('mouseover', changeToBlue);

redButton.addEventListener('mouseout', revertToNormal);
greenButton.addEventListener('mouseout', revertToNormal);
blueButton.addEventListener('mouseout', revertToNormal);
