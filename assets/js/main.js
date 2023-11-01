const clearBtn = document.querySelector('#clear');
const smallGrid = document.querySelector('#small-grid');
const mediumGrid = document.querySelector('#medium-grid');
let grid = document.querySelector('#grid-container');
// const gameContainerWindow = document.querySelector('#grid-container');

function createGrid(rows, columns) {
  
  grid.textContent = "";

  for (let i = 0; i < columns; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    // column.style.border = '2px solid black'; // Added a double border to divs
    for (let j = 0; j < rows; j++) {
      let row = document.createElement('div');
      row.classList.add('row');
      row.style.border = '2px solid black';
      // row.innerText = 'CRTAJ...BOLI ME KURAC DJE'; // Made divs not fit container properly
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
};



smallGrid.addEventListener('click', function () {
  createGrid(16, 16);
  row.style.height = "39.8%";
  column.style.height = "39.8%";
});

console.log(smallGrid);


mediumGrid.addEventListener('click', function () {
  createGrid(32);
  grid.style.gridTemplateColumns = "32, 1fr";
  grid.style.gridTemplateRows = "32, 1fr";
});

console.log(mediumGrid);


clearBtn.addEventListener('click', function () {
  grid.innerHTML = "";
});
