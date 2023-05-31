const boardWrapper = document.querySelector('.board__wrapper');

function generateBoard(size, color = 'black') {
  boardWrapper.textContent = '';
  for (let i = 0; i < size; i++) {
    const col = document.createElement('div');
    boardWrapper.appendChild(col);
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('grid__item');
      square.style.width = `${720 / size}px`;
      square.style.height = `${720 / size}px`;
      square.style.backgroundColor = 'white'
      square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = color;
      });
      col.appendChild(square);
    }
  }
}

generateBoard(16);

function changeBoardSize() {
  let input = prompt('Choose board size (min 4 max 100)');
  input = parseFloat(input);
  console.log(input);
  if (isNaN(input) || input < 4 || input > 100) {
    alert('Invalid input');
  } else {
    generateBoard(input);
  }
}

function resetBoard() {
  generateBoard(16);
}

function pen(color) {
  let gridItems = document.querySelectorAll('.grid__item');
  gridItems.forEach((item) => {
    function handleMouseEnter(event) {
      const item = event.target;
      item.style.backgroundColor = color;
    }
    item.removeEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseenter', handleMouseEnter);
  });
}

function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color; // Add the "#" symbol to make it a valid color code
}
function RGB() {
  let gridItems = document.querySelectorAll('.grid__item');
  gridItems.forEach((item) => {
    function handleMouseEnter(event) {
      const item = event.target;
      item.style.backgroundColor = randomColor();
    }
    item.removeEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseenter', handleMouseEnter);
  });
}