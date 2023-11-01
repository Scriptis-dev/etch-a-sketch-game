const clearBtn = document.querySelector('#clear');
const smallGrid = document.querySelector('#small-grid');
const mediumGrid = document.querySelector('#medium-grid');
const largeGrid = document.querySelector('#large-grid');
let gridContainer = document.querySelector('#grid-container');
// const gameContainerWindow = document.querySelector('#grid-container');

function createSmallGrid(rows, columns) {
  
  gridContainer.textContent = "";

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    // column.style.border = '2px solid black'; // Added a double border to divs
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('div');
      cell.classList.add('small-grid-cell');
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
};

function createMediumGrid(rows, columns) {
  
  gridContainer.textContent = "";

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    // column.style.border = '2px solid black'; // Added a double border to divs
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('div');
      cell.classList.add('medium-grid-cell');
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
};

function createLargeGrid(rows, columns) {
  
  gridContainer.textContent = "";

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    // column.style.border = '2px solid black'; // Added a double border to divs
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('div');
      cell.classList.add('large-grid-cell');
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
};








smallGrid.addEventListener('click', function () {
  // cell.classList.add('small-grid-cell');
  createSmallGrid(16, 16);

});

mediumGrid.addEventListener('click', function () {
  createMediumGrid(32, 32);
});

largeGrid.addEventListener('click', function () {
  createLargeGrid(64, 64);
});


clearBtn.addEventListener('click', function () {
  gridContainer.innerHTML = "";
});
