# etch-a-sketch

This project(Etch-a-Sketch) generates squares, within the container seen in the middle of the page, based on how many squares the user desires to have.

Once the squares are generated, the squares will be colored in when the user places their mouse over a square. 

If you'd like to reset, clicking the reset button will clear out the squares.

TECHNOLOGIES USED

For this project I used HTML, CSS, and JavaScript, with a big focus on JS. Initially, the challenge was in duplicating the squares, and I initially used a while loop with a clone Node. Ex:

while (i < userChoice) {
  <!-- more code -->
  square.cloneNode();
  i = i + 1;
}

This allowed me to duplicate the squares, but after applying:

square.addEventListener('mouseover', () => {
  square.style.backgroundColor = 'green';
});

Only the first square would get colored in, while the others would not. I believe this is because the other squares were simply clones of the first initial square. 

After more research, using a for loop instead yielded better results and all the squares would now change color. From there, I used flexbox to make sure the squares were in the right shape of the container.