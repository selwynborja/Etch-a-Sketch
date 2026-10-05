const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const sizeBtn = document.getElementById('size-btn');

function createGrid(size) {
  // 1. Wipe out existing elements cleanly before building
  container.innerHTML = ''; 

  // 2. Feed the new grid sizing dimensions back to CSS variables
  document.documentElement.style.setProperty('--grid-rows', size);
  document.documentElement.style.setProperty('--grid-cols', size);

  // 3. Populate new square nodes
  const totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

    square.addEventListener('mouseenter', () => {
      square.classList.add('active');
    });

    container.appendChild(square);
  }
}

// Prompt size selection functionality 
sizeBtn.addEventListener('click', () => {
  let userChoice = prompt("Enter grid size per side (Maximum: 100):");
  
  // Exit cleanly if user hits 'Cancel'
  if (userChoice === null) return; 
  
  let newSize = parseInt(userChoice);

  // Check if input is a valid number between 1 and 100
  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Clear canvas behavior
resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => square.classList.remove('active'));
});

// Default starting point: 16x16 grid canvas layout load
createGrid(16);