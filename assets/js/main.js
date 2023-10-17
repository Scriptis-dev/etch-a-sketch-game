const clearBtn = document.querySelector('#clear-');
// const gameContainerWindow = document.querySelector('#grid-container');

function createGrid(size) {
  let grid = document.querySelector('#grid-container');
  for (let i = 0; i < size; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    column.style.border = '2px solid black';
    for (let j = 0; j < size; j++) {
      let row = document.createElement('div');
      row.classList.add('row');
      row.style.border = '2px solid black';
      // row.style.width = '100%';
      row.innerText = 'CRTAJ...BOLI ME KURAC DJE';
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
};

createGrid(10);