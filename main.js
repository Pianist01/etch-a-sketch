
/* Button To Start and Reset Etch-a-Sketch & Main Container - START */

const container = document.querySelector('.container');


const btn = document.querySelector('#start');

const reset = document.querySelector('#reset');


btn.addEventListener('click', () => {
  createRow();
});

reset.addEventListener('click', () => {
  location.reload();
});

/* Button To Start and Reset Etch-a-Sketch & Main Container - END */


/* Container For Squares - START */

const div = document.createElement('div');
div.classList.add('grid');
container.append(div);

/* Container For Squares - END */


/* Squares - START */

function createRow() {
  let userChoice = prompt('Choose Grid Size from 16 - 100');
  let i = 0;
  let j = 0;

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

/* Squares - END */