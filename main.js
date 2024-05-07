// Visualizing code with words

/* User will be prompted with how size they want grid to be when they click button. Ex: 16 => 16 x 16 grid is created.

When user hovers over squares with mouse, color of square will change.
*/

/* Button To Start Etch-a-Sketch - START */
let userChoice;

const btn = document.querySelector('#start');

btn.addEventListener('click', () => {
  chooseGrid();
});
/* Button To Start Etch-a-Sketch - END */


/* Container - START */

const div = document.createElement('div');
div.classList.add('container');

const container = document.querySelector('.container');
container.textContent = 'This is a container';

/* Container - END */


/* Divs - START */

let square = document.createElement('div');
square.classList.add('inner');
square.textContent = 'I am a square';
container.appendChild(square);

function chooseGrid (number) {
  let userChoice = prompt('How big do you want your grid to be?');
  let i = 1;
  let copy;
  number = parseInt(userChoice);
  while (i < number) {
    document.querySelector('.inner');
      copy = square.cloneNode(true);
      square.after(copy);
      i = i + 1;
      if (number > 100) {
        break;
      }    
  }
  return copy;
}
/* Divs - END */