// const clearBtn = document.querySelector('#clear');
// const smallGrid = document.querySelector('#small-grid');
// const mediumGrid = document.querySelector('#medium-grid');
// const largeGrid = document.querySelector('#large-grid');
// let gridContainer = document.querySelector('#grid-container');
// // const gameContainerWindow = document.querySelector('#grid-container');

// // function createSmallGrid(rows, columns) {
  
// //   gridContainer.textContent = "";

// //   for (let i = 0; i < rows; i++) {
// //     const row = document.createElement('div');
// //     row.classList.add('grid-row');
// //     // column.style.border = '2px solid black'; // Added a double border to divs
// //     for (let j = 0; j < columns; j++) {
// //       const cell = document.createElement('div');
// //       cell.classList.add('small-grid-cell', 'cell');
// //       row.appendChild(cell);
// //     }
// //     gridContainer.appendChild(row);
// //   }
// // };

// // function createMediumGrid(rows, columns) {
  
// //   gridContainer.textContent = "";

// //   for (let i = 0; i < rows; i++) {
// //     const row = document.createElement('div');
// //     row.classList.add('grid-row');
// //     // column.style.border = '2px solid black'; // Added a double border to divs
// //     for (let j = 0; j < columns; j++) {
// //       const cell = document.createElement('div');
// //       cell.classList.add('medium-grid-cell', 'cell');
// //       row.appendChild(cell);
// //     }
// //     gridContainer.appendChild(row);
// //   }
// // };

// function createGrid(size) {
//   gridContainer.innerHTML = '';

//   for (let i = 0; i < size; i++) {
//     const row = document.createElement('div');
//     row.classList.add('row');

//       for (let j = 0; j < size; j++) {
//   } 
//     {
//     const cell = document.createElement('div');
//     cell.classList.add('cell');
//     row.appendChild(cell);
//   }

//   gridContainer.appendChild(row);
// }

// // gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
// // gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

// };





// // createLargeGrid(16);






// smallGrid.addEventListener('click', function () {
//   createGrid(16);

// });

// mediumGrid.addEventListener('click', function () {
//   createGrid(32);
  
// });

// largeGrid.addEventListener('click', function () {
//   createGrid(64);
// });


// clearBtn.addEventListener('click', function () {
//   gridContainer.innerHTML = "";
// });


// gridContainer.addEventListener('mouseover', (e) => {
//   e.target.style.backgroundColor = "#000000";

//   // else {
//   //   return;
//   }
// );


function createGrid(size) {
    const grid = document.getElementsByClassName('game-grid');
    grid.style.gridTemplateRows = 'repeat(16, 1fr)';
    grid.style.gridTemplateColumns = 'repeat(16, 1fr)';

    for (let i = 0; i < size; i++) {
      let square = document.createElement('div');
      square.style.backgroundColor = 'blue';
      grid.appendChild(square);
  }
};

createGrid(16);

console.log(createGrid(16));