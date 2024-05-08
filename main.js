// Visualizing code with words

/* User will be prompted with how size they want grid to be when they click button. Ex: 16 => 16 x 16 grid is created.

When user hovers over squares with mouse, color of square will change.
*/

/* Button To Start Etch-a-Sketch - START */

const container = document.querySelector('.container');


const btn = document.querySelector('#start');

const reset = document.querySelector('#reset');


btn.addEventListener('click', () => {
  createRow();
});
/* Button To Start Etch-a-Sketch - END */

/* Button To Reset Game - START */


reset.addEventListener('click', () => {
  location.reload();
});


/* Container - START */

const div = document.createElement('div');
div.classList.add('grid');
container.append(div);

/* Container - END */

/* Divs - START */

function createRow() {
  let userChoice = prompt('Choose Grid Size from 16 - 100');
  let i = 0;
  let j = 0;
  // let gridSize = 12.5;
  // const numberX = userChoice * userChoice;
  // const numberY = userChoice;

  // div.style.gridTemplateColumns = `repeat(${userChoice}, auto`;
  // div.style.girdTemplateRows = `repeat(${userChoice}, auto`;

  for (i = 0; i < userChoice; i++) {
    for (j = 0; j < userChoice; j++) {
    let row = document.createElement('div');
    row.classList.add('across');
    div.appendChild(row);

    row.style.flexBasis = `calc(100% / ${userChoice})`;

    row.addEventListener('mouseover', () => {
      row.style.backgroundColor = 'white';
    });
    }
}
  if (userChoice > 100) {
    alert('Too big!');
  }
}